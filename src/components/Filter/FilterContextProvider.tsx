import { PropsWithChildren, createContext } from 'react';
import type { FilterSpec, FilterType } from '~/hooks/useFilter';

export type FilterContextValues =
  | {
      type: Extract<FilterType, 'grant'>;
      filterKeys?: Array<FilterSpec['grant']['keys']>;
      items?: FilterSpec['grant']['items'];
    }
  | {
      type: Extract<FilterType, 'blog'>;
      filterKeys?: Array<FilterSpec['blog']['keys']>;
      items?: FilterSpec['blog']['items'];
    };

export const FilterContext = createContext<FilterContextValues | null>(null);

type FilterContextProps = PropsWithChildren<FilterContextValues>;

export function FilterContextProvider({
  children,
  ...props
}: FilterContextProps) {
  return (
    <FilterContext.Provider value={props}>{children}</FilterContext.Provider>
  );
}
