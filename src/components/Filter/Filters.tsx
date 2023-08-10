import { useStore } from '@nanostores/react';
import { useContext } from 'react';
import { FilterContext } from '~/components/Filter/FilterContextProvider';
import { FilterRenderer } from '~/components/Filter/Renderer/FilterRenderer';
import { Button } from '~/components/Ui/Form/Button';
import { Icon } from '~/components/Ui/Icon';
import { cn } from '~/util/cn';
import { FilterMode, filterMap, filterModeAtom } from '~/util/store';

export function Filters() {
  const filterContext = useContext(FilterContext);

  if (!filterContext) {
    throw new Error('FilterContext is not defined');
  }

  const { filterKeys } = filterContext;

  const filterMode = useStore(filterModeAtom);

  const handleClearClick = () => {
    filterMap.set({});
  };

  const handleMobileModeClick = (mode: FilterMode) => () => {
    if (filterMode === mode) {
      filterModeAtom.set(null);
    } else {
      filterModeAtom.set(mode);
    }
  };

  return (
    <>
      <div className="md:hidden flex flex-col fixed top-[--navigation-trigger-height-mobile] w-full left-0 z-30">
        <div className="flex border-b border-b-black">
          <Button
            variant="base"
            size="base"
            className={cn([
              'uppercase items-end w-1/2 pt-6 pb-0.5 px-5 bg-gray-300 font-mono text-sm font-bold antialiased',
            ])}
            onClick={handleMobileModeClick('tags')}>
            <Icon className="mb-1.5 mr-3" icon={filterMode === 'filter' ? 'minus' : 'plus'} />{' '}
            Search by Tags
          </Button>
          <Button
            variant="base"
            size="base"
            className={cn([
              'uppercase items-end justify-end w-1/2 pt-6 pb-0.5 px-5 bg-black text-white font-mono text-sm font-bold antialiased',
              filterMode === 'filter' && 'bg-yellow-400 text-black',
            ])}
            onClick={handleMobileModeClick('filter')}>
            Filter{' '}
            <Icon className="mb-1.5 ml-3" icon={filterMode === 'filter' ? 'minus' : 'plus'} />
          </Button>
        </div>
        {!!filterMode && (
          <div className="font-mono uppercase">
            {filterMode === 'tags' && (
              <div className="gap-5 grid-in-search self-start">
                {!!filterKeys?.length && filterKeys.includes('tags') && (
                  <FilterRenderer key="tags" filterKey="tags" />
                )}
              </div>
            )}
            {filterMode === 'filter' && (
              <div className="flex flex-col">
                <div className="flex flex-col">
                  {!!filterKeys?.length &&
                    filterKeys.map(
                      (filterKey) =>
                        filterKey !== 'tags' && (
                          <FilterRenderer key={filterKey} filterKey={filterKey} />
                        )
                    )}
                </div>
                <Button
                  onClick={handleClearClick}
                  className="flex justify-end bg-black text-yellow-400 px-4 py-0.5 h-full uppercase font-bold">
                  Clear
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={cn([
          'sticky top-[--header-height] flex flex-col flex-nowrap w-full left-0 -ml-5 z-30 mb-20 before:bleed-bg-r before:bleed-white',
          'before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[calc(100%+var(--header-height))] before:bg-white before:-z-10',
          'max-md:hidden',
        ])}>
        <div className="order-1 pb-[1px] pt-0 md:mb-0 md:bleed-bg md:bleed-black md:text-white uppercase items-center font-mono md:grid grid-cols-filters grid-rows-filters grid-areas-filters w-1/2 md:w-full">
          <div className="uppercase font-bold md:bleed-black h-full flex items-center w-full">
            Filter
          </div>
          <div className="flex flex-row h-full">
            <div className="flex flex-row gap-8 w-full h-full">
              {!!filterKeys?.length &&
                filterKeys.map(
                  (filterKey) =>
                    filterKey !== 'tags' && <FilterRenderer key={filterKey} filterKey={filterKey} />
                )}
            </div>
            <div className="h-full uppercase items-center ml-4">
              <Button onClick={handleClearClick} className="p-0 h-full uppercase font-bold">
                Clear
              </Button>
            </div>
          </div>
        </div>
        <div
          className={cn([
            'w-full order-2 pt-0 mb-0 flex flex-col text-xs uppercase gap-x-8 items-center font-mono',
            'bg-white text-white bleed-white bleed-border-t grid grid-cols-tag-search grid-rows-tag-search grid-areas-tag-search',
          ])}>
          <div className="h-full uppercase font-bold grid-in-title flex items-center bleed-bg-l bleed-black">
            Search by tag
          </div>
          <div className="gap-5 grid-in-search self-start">
            {!!filterKeys?.length && filterKeys.includes('tags') && (
              <FilterRenderer key="tags" filterKey="tags" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
