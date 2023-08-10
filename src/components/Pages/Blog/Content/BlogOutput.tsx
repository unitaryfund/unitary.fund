import { useContext } from 'react';
import { FilterContext } from '~/components/Filter/FilterContextProvider';
import useFilter, { BlogEntry } from '~/hooks/useFilter';
import { BlogItem } from './BlogItem';

export function BlogOutput() {
  const filterContext = useContext(FilterContext);

  if (!filterContext) {
    throw new Error('FilterContext is not defined');
  }

  const { items } = filterContext;

  const filteredPosts = useFilter<'blog'>((items || []) as BlogEntry[]);

  return (
    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-12">
      {filteredPosts?.map((post) => (
        <BlogItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
