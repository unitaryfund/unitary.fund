import { useContext, useMemo } from 'react';
import { FilterContext, FilterContextValues } from '~/components/Filter/FilterContextProvider';
import TagFilter from '~/components/Filter/Renderer/TagFilter';
import SelectFilter from '~/components/Filter/Renderer/SelectFilter';

type FilterProps = {
  filterKey: NonNullable<FilterContextValues['filterKeys']>[0];
};

export function FilterRenderer({ filterKey }: FilterProps) {
  const grantsContext = useContext(FilterContext);

  if (!grantsContext) {
    throw new Error('GrantsContext is not defined');
  }

  const { items } = grantsContext;

  const filterValues = useMemo(() => {
    const values = new Set<string>();

    items?.forEach((item) => {
      Object.entries(item.data).forEach(([key, value]) => {
        if (key !== filterKey) {
          return;
        }

        if (typeof value === 'number' || typeof value === 'string') {
          values.add(value.toString());
        } else if (Array.isArray(value)) {
          value.forEach((v) => {
            values.add(v.toString());
          });
        }
      });
    });

    return Array.from(values);
  }, [items]);

  if (filterKey === 'tags') {
    return <TagFilter filterKey={filterKey} filterValues={filterValues} />;
  } else {
    return <SelectFilter filterKey={filterKey} filterValues={filterValues} />;
  }
}
