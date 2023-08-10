import { cn } from '~/util/cn';
import { useSelect } from 'downshift';
import type { FilterContextValues } from '~/components/Filter/FilterContextProvider';
import { filterMap, filterModeAtom } from '~/util/store';
import { ISO_3166_ALPHA_2_CODES, ISO_3166_ALPHA_2_MAPPINGS } from '~/util/iso3166';
import { Icon } from '~/components/Ui/Icon';
import { useStore } from '@nanostores/react';

type SelectFilterProps = {
  filterKey: NonNullable<FilterContextValues['filterKeys']>[0];
  filterValues: string[];
};

function getSortedFilterValues(
  filterKey: NonNullable<FilterContextValues['filterKeys']>[0],
  filterValues: string[]
) {
  if (filterKey === 'country') {
    const countryFilterValues = new Set<string>();

    for (const countryFilterEntry of filterValues) {
      if (countryFilterEntry.includes(',')) {
        for (const country of countryFilterEntry.split(',')) {
          countryFilterValues.add(country.trim());
        }
      } else {
        countryFilterValues.add(countryFilterEntry);
      }
    }

    return [...countryFilterValues].sort((a, b) => {
      const aLabel = getLabel(filterKey, a);
      const bLabel = getLabel(filterKey, b);

      return aLabel.localeCompare(bLabel);
    });
  } else if (filterKey === 'month' || filterKey === 'year' || filterKey === 'day') {
    return filterValues.sort((a, b) => +a - +b);
  } else {
    return filterValues.sort((a, b) => a.localeCompare(b));
  }
}

function getLabel(filterKey: NonNullable<FilterContextValues['filterKeys']>[0], value: string) {
  if (filterKey === 'country' && ISO_3166_ALPHA_2_CODES.includes(value)) {
    return ISO_3166_ALPHA_2_MAPPINGS[value as (typeof ISO_3166_ALPHA_2_CODES)[number]];
  } else if (filterKey === 'month') {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return monthNames[+value - 1];
  } else {
    return value;
  }
}

export default function SelectFilter({ filterKey, filterValues }: SelectFilterProps) {
  const filter = useStore(filterMap);
  const filterValue = filterKey in filter ? filter[filterKey] : '';

  if (Array.isArray(filterValue)) {
    throw new Error('SelectFilter does not support multiple values');
  }

  const {
    isOpen,
    closeMenu,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: filterValues,
    selectedItem: filterValue,
  });

  return (
    <div
      className={cn([
        'flex-grow relative bg-white',
        'after:top-0 after:content-["|"] after:absolute after:-right-[1.35rem] after:font-bold after:hidden md:after:block last:after:hidden',
        'max-md:text-sm',
      ])}>
      <div className="w-100 flex flex-col gap-1 h-full select-none">
        <div
          className={cn([
            'flex cursor-pointer text-black hover:text-black hover:bg-yellow-400 h-full',
            'max-md:px-4 max-md:py-2 max-md:border-b max-md:border-black max-md:items-center',
          ])}
          {...getToggleButtonProps()}>
          <div className="px-4 max-md:hidden">{isOpen ? <>&#8593;</> : <>&#8595;</>}</div>
          {!!selectedItem && <div className="font-bold md:hidden mr-2">{filterKey}:</div>}
          <div className="font-bold">
            {!!selectedItem && getLabel(filterKey, selectedItem)}
            {!selectedItem && filterKey}
          </div>
          <div className="pr-1 pl-3 ml-auto md:hidden">
            <Icon icon={isOpen ? 'minus' : 'plus'} />
          </div>
        </div>
      </div>
      <ul
        className={cn([
          'w-full mt-0 max-h-80 z-20  overflow-y-scroll scrollbar-hide p-0 list-image-none',
          'md:absolute md:bg-light-grey',
          'max-md:bg-gray-200',
          !isOpen && 'hidden',
        ])}
        {...getMenuProps()}>
        {isOpen &&
          getSortedFilterValues(filterKey, filterValues).map((item, index) => {
            const handleClick = () => {
              filterMap.setKey(filterKey, item);
              filterModeAtom.set(null);
              closeMenu();
            };

            return (
              <li
                className={cn(
                  'px-4 flex flex-col text-black cursor-pointer border-black border-b',
                  'md:py-1',
                  'max-md:py-2',
                  highlightedIndex === index && 'bg-yellow-400',
                  selectedItem === item && 'font-bold'
                )}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
                onClick={handleClick}>
                <span>{getLabel(filterKey, item)}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
