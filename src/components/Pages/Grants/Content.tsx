import { FilterContextProvider } from '~/components/Filter/FilterContextProvider';
import { Filters } from '~/components/Filter/Filters';
import { GrantsOutput } from '~/components/Pages/Grants/Content/GrantsOutput';
import type { FilterSpec } from '~/hooks/useFilter';

export type ContentProps = {
  filters?: Array<FilterSpec['grant']['keys']>;
  items?: FilterSpec['grant']['items'];
};

export default function Content({ filters, items }: ContentProps) {
  const finalFilters: Array<FilterSpec['grant']['keys']> = [];

  if (filters) {
    for (const filter of filters.slice(0, 4)) {
      finalFilters.push(filter);
    }
  }

  finalFilters.push('tags');

  return (
    <FilterContextProvider type="grant" filterKeys={finalFilters} items={items}>
      <Filters />
      <GrantsOutput />
    </FilterContextProvider>
  );
}
