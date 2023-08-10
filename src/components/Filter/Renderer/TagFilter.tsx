import { cn } from '~/util/cn';
import { useState } from 'react';
import { useMultipleSelection, useCombobox } from 'downshift';
import type { FilterContextValues } from '~/components/Filter/FilterContextProvider';
import { filterMap } from '~/util/store';
import { useStore } from '@nanostores/react';

type SelectFilterProps = {
  filterKey: NonNullable<FilterContextValues['filterKeys']>[0];
  filterValues: string[];
};

export default function TagFilter({ filterKey, filterValues }: SelectFilterProps) {
  const filter = useStore(filterMap);
  const filterValue = filterKey in filter ? filter[filterKey] : [];

  if (!Array.isArray(filterValue)) {
    throw new Error('TagFilter does not support single values');
  }

  /**
   * State
   */

  const [inputValue, setInputValue] = useState('');

  /**
   * Hooks
   */

  const { getSelectedItemProps, getDropdownProps, removeSelectedItem } = useMultipleSelection({
    selectedItems: filterKey in filter ? (filter[filterKey] as string[]) : [],
    onStateChange({ selectedItems: newSelectedItems, type }) {
      switch (type) {
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
        case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
        case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
          if (newSelectedItems?.length === 0) {
            filterMap.setKey(filterKey, undefined);
          } else {
            filterMap.setKey(filterKey, newSelectedItems);
          }
          break;
      }
    },
  });

  const items = filterValues
    .filter((item) => !filterValue.includes(item))
    .sort((a, b) => a.localeCompare(b, 'en-US'));

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    items,
    itemToString() {
      return '';
    },
    defaultHighlightedIndex: 0, // after selection, highlight the first item.
    selectedItem: null,
    onStateChange({ inputValue: newInputValue, type, selectedItem: newSelectedItem }) {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (newSelectedItem) {
            filterMap.setKey(filterKey, [...new Set([...filterValue, newSelectedItem])]);
          }
          setInputValue('');
          break;

        case useCombobox.stateChangeTypes.InputChange:
          if (newInputValue) {
            setInputValue(newInputValue);
          }
          break;
      }
    },
  });

  /**
   * Render
   */

  return (
    <div className="relative">
      <div className="w-full md:h-[30px] bleed-black bleed-border-b">
        <div className="flex h-full">
          <input
            placeholder="Enter Tag"
            className={cn([
              'w-full text-black text-xs outline-none uppercase font-mono font-bold placeholder:font-normal placeholder:uppercase',
              'max-md:py-2 max-md:px-4 max-md:placeholder:text-black max-md:placeholder:font-bold',
              !inputValue && 'max-md:bg-gray-100',
              !!inputValue && 'max-md:bg-gray-200',
            ])}
            {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
          />
          <button
            className="max-md:hidden pl-2"
            aria-label="Toggle Menu"
            type="button"
            {...getToggleButtonProps()}>
            &#8595;
          </button>
        </div>
        <ul
          className={cn([
            'absolute w-screen z-20 bg-white border-black border border-b-0 max-h-80 overflow-y-scroll scrollbar-hide p-0 list-image-none',
            'md:-left-8',
            'max-md:border-l-0 max-md:border-r-0',
            !(isOpen && items.length) && 'hidden',
          ])}
          {...getMenuProps()}>
          {isOpen &&
            items.map((item, index) => (
              <li
                className={cn(
                  highlightedIndex === index && 'bg-yellow-400',
                  selectedItem === item && 'font-bold',
                  'flex gap-2 text-black cursor-pointer border-black border-b',
                  'max-md:pl-4 max-md:text-xs max-md:bg-gray-100',
                  'md:pr-4'
                )}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}>
                <span
                  className={cn([
                    'flex items-center bg-black text-white',
                    'max-md:order-2 max-md:ml-auto max-md:px-3',
                    'md:px-0.5',
                  ])}>
                  +
                </span>
                <span className="py-[0.15rem] tracking-wider max-md:py-2">{item}</span>
              </li>
            ))}
        </ul>
      </div>
      <div
        className={cn(['absolute top-full flex text-xs mt-[-1px]', 'max-md:flex-col', 'md:-ml-8'])}>
        {filterValue?.map((item, index) => (
          <div
            className={cn([
              'flex cursor-pointer bg-white text-black border-black border items-center group',
              'hover:bg-yellow-400',
              'md:h-[27px]',
              'max-md:border-l-0 max-md:border-r-0',
            ])}
            key={`selected-item-${index}`}
            {...getSelectedItemProps({
              selectedItem: item,
              index,
            })}
            onClick={(e) => {
              e.stopPropagation();
              removeSelectedItem(item);
            }}>
            <span
              className={cn([
                'px-0.5 bg-black text-white h-full flex items-center',
                'group-hover:text-yellow-400',
                'max-md:order-2 max-md:ml-auto max-md:py-1 max-md:px-3',
              ])}>
              &#10005;
            </span>
            <span className={cn(['block px-3 tracking-wider', 'max-md:py-1 max-md:px-3'])}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
