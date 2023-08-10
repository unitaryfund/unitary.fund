import { FilterContextProvider } from '~/components/Filter/FilterContextProvider';
import { Filters } from '~/components/Filter/Filters';
import { BlogOutput } from '~/components/Pages/Blog/Content/BlogOutput';
import type { FilterSpec } from '~/hooks/useFilter';

export type ContentProps = {
  filters?: Array<FilterSpec['blog']['keys']>;
  items?: FilterSpec['blog']['items'];
};

export default function Content({ filters, items }: ContentProps) {
  const finalFilters: Array<FilterSpec['blog']['keys']> = [];

  if (filters) {
    for (const filter of filters.slice(0, 4)) {
      finalFilters.push(filter);
    }
  }

  finalFilters.push('tags');

  return (
    <FilterContextProvider type="blog" filterKeys={finalFilters} items={items}>
      <Filters />
      <BlogOutput />
    </FilterContextProvider>
  );
}
