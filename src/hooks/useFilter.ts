import { useMemo } from 'react';
import type { z, CollectionEntry } from 'astro:content';
import type { blogSchema, grantSchema } from '~/content/config';
import { useStore } from '@nanostores/react';
import { filterMap } from '~/util/store';

export type FilterType = 'grant' | 'blog';

type GrantSchema = z.infer<typeof grantSchema>;
export type GrantEntry = CollectionEntry<'grant'> & { data: GrantSchema };
type BlogSchema = z.infer<typeof blogSchema>;
export type BlogEntry = CollectionEntry<'blog'> & { data: BlogSchema };

export type FilterSpec = {
  grant: {
    items: Array<GrantEntry>;
    schema: GrantSchema;
    keys: keyof GrantSchema;
  };
  blog: {
    items: Array<BlogEntry>;
    schema: BlogSchema;
    keys: keyof BlogSchema;
  };
};

export default function useFilter<T extends FilterType>(items: FilterSpec[T]['items']) {
  const filter = useStore(filterMap);

  return useMemo<typeof items>(() => {
    const filteredItems = [];

    if (filter) {
      for (const item of items) {
        const itemCheck = item as FilterSpec[T]['items'][0];
        const itemDataCheck = item.data as FilterSpec[T]['items'][0]['data'];
        const filterKeys = Object.keys(filter) as Array<keyof typeof filter>;

        const canAdd = filterKeys.every((key) => {
          if (key in itemDataCheck) {
            const filterValue = filter[key as keyof typeof filter];
            const itemDataFilterValue = itemDataCheck[key as keyof typeof itemDataCheck];

            console.log(itemDataFilterValue);

            if (typeof filterValue !== 'undefined') {
              if (Array.isArray(filterValue)) {
                return (
                  filterValue.filter((filterValueItem) => {
                    if (Array.isArray(itemDataFilterValue)) {
                      if (
                        typeof filterValueItem === 'number' &&
                        itemDataFilterValue.includes(filterValueItem)
                      ) {
                        return true;
                      } else if (
                        typeof filterValueItem === 'string' &&
                        itemDataFilterValue.includes(filterValueItem)
                      ) {
                        return true;
                      }
                    }

                    return false;
                  }).length > 0
                );
              } else {
                if (
                  typeof itemDataFilterValue === 'number' &&
                  itemDataFilterValue === +filterValue
                ) {
                  return true;
                } else if (typeof itemDataFilterValue === 'string') {
                  if (key === 'country') {
                    console.log(
                      itemDataFilterValue,
                      filterValue,
                      itemDataFilterValue.includes(filterValue)
                    );
                    return itemDataFilterValue.includes(filterValue);
                  } else {
                    return itemDataFilterValue === filterValue;
                  }
                }
              }
            }

            return false;
          }
        });

        if (canAdd) {
          filteredItems.push(itemCheck);
        }
      }

      return filteredItems as typeof items;
    }

    return items;
  }, [items, filter]);
}
