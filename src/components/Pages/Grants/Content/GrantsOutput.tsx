import { useContext } from 'react';
import { FilterContext } from '~/components/Filter/FilterContextProvider';
import useGrantsByYear from '~/hooks/useGrantsByYear';
import useFilter, { GrantEntry } from '~/hooks/useFilter';
import { GrantItem } from './GrantItem';
import { cn } from '~/util/cn';

export function GrantsOutput() {
  const filterContext = useContext(FilterContext);

  if (!filterContext) {
    throw new Error('FilterContext is not defined');
  }

  const { items } = filterContext;

  const filteredGrants = useFilter<'grant'>((items || []) as GrantEntry[]);
  const grantsByYear = useGrantsByYear(filteredGrants);

  return (
    <div>
      {Array.from(grantsByYear).map(([year, grants]) => {
        const displayBackgroundNumber = grants?.length && grants?.length > 3;

        return (
          <div key={year} className="relative">
            <h2
              className={cn([
                'relative inline-block font-mono text-xl pr-4 bleed-bg-l bleed-yellow-400 z-10',
                'before:block before:absolute before:w-full before:h-full before:left-0 before:top-0 before:-z-10 before:content-[""] before:bg-yellow-400',
                'after:block after:absolute after:w-screen after:left-0 after:translate-x-0 after:top-[1px] after:-z-20 after:box-border after:content-[""] after:border-solid after:border-b after:border-b-black',
                'max-md:after:hidden nav-mobile:after:hidden',
              ])}>
              {year}
            </h2>
            {displayBackgroundNumber && (
              <div className="hidden lg:block sticky top-[calc(var(--logo-height))] left-0 leading-none text-[300px] opacity-[0.02] font-mono z-0 pointer-events-none">
                {year}
              </div>
            )}
            <ul
              className={cn([
                'flex flex-wrap gap-4 py-20 z-10',
                displayBackgroundNumber && 'lg:mt-[-300px]',
              ])}>
              {grants
                ?.sort((a, b) => {
                  const dateA = new Date(a.data.year, (a.data.month || 1) - 1, a.data.day || 1);
                  const dateB = new Date(b.data.year, (b.data.month || 1) - 1, b.data.day || 1);
                  return dateB.getTime() - dateA.getTime();
                })
                ?.map((grant) => (
                  <GrantItem key={grant.slug} grant={grant} />
                ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
