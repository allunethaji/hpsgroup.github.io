<?php

namespace Common\Search;

use Illuminate\Database\Eloquent\Builder;

trait Searchable
{
    use \Laravel\Scout\Searchable;

    public function scopeMysqlSearch(Builder $builder, string $query): Builder
    {
        $searchableFields = [];
        $searchableRelations = [];

        foreach ((new static())->toSearchableArray() as $field => $value) {
            if (!in_array($field, static::filterableFields())) {
                if (method_exists(static::class, $field)) {
                    $searchableRelations[] = $field;
                } else {
                    $searchableFields[] = $field;
                }
            }
        }

        $builder->matches($searchableFields, $query);

        foreach ($searchableRelations as $relation) {
            $builder->orWhereHas(
                $relation,
                fn(Builder $q) => $q->mysqlSearch($query),
            );
        }

        return $builder;
    }

    public function scopeMatches(
        Builder $builder,
        array $columns,
        string $value
    ): Builder {
        $mode = config('common.site.scout_mysql_mode');
        $columns = array_map(fn($col) => $this->qualifyColumn($col), $columns);
        if ($mode === 'fulltext' && strlen($value) >= 3) {
            if (is_null($builder->getQuery()->columns)) {
                $builder->select($this->qualifyColumn('*'));
            }
            $colString = implode(',', $columns);
            $builder->selectRaw(
                "MATCH($colString) AGAINST(? IN NATURAL LANGUAGE MODE) AS relevance",
                [$value],
            );
            $builder->whereRaw("MATCH($colString) AGAINST(?)", [$value]);
        } else {
            $builder->where(function (Builder $nestedBuilder) use (
                $columns,
                $mode,
                $value
            ) {
                foreach ($columns as $column) {
                    $nestedBuilder->orWhere(
                        $column,
                        'like',
                        $mode === 'basic' ? "$value%" : "%$value%",
                    );
                }
            });
        }

        return $builder;
    }

    public function getSearchableValues(): array
    {
        $searchableValues = [];
        foreach ($this->toSearchableArray() as $key => $value) {
            if (!in_array($key, self::filterableFields())) {
                $searchableValues[] = $value;
            }
        }
        return $searchableValues;
    }

    public static function getSearchableKeys($skipRelations = false): array
    {
        $searchableKeys = [];
        foreach ((new static())->toSearchableArray() as $key => $value) {
            if (
                !in_array($key, static::filterableFields()) &&
                (!$skipRelations || !method_exists(static::class, $key))
            ) {
                $searchableKeys[] = $key;
            }
        }

        return $searchableKeys;
    }
}
