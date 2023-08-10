import type { FilterSpec } from '~/hooks/useFilter';
import { cn } from '~/util/cn';

type BlogItemProps = {
  className?: string;
  post: FilterSpec['blog']['items'][0];
};

export function BlogItem({ className, post: { data: post, slug } }: BlogItemProps) {
  return (
    <article className={cn(['flex flex-col border-l border-black max-sm:bg-gray-200', className])}>
      <header className="flex flex-col p-2 pl-3 mdpl-4 border-b border-black md:flex-row">
        <time
          className="font-mono max-md:text-lg"
          dateTime={`${post.year}-${post.month}-${post.day}`}>
          {`${post.month}`}.{post.day}.{post.year}
        </time>
        <div className="font-bold md:ml-3 max-md:text-lg">{post.author}</div>
      </header>
      <div
        className={cn([
          'flex-grow p-2 pl-3 text-lg pt-4 pb-8',
          'md:pt-5 md:pl-4 md:text-2xl md:min-h-[120px]',
          'max-md:text-xl',
        ])}>
        {post.title}
      </div>
      <footer className=" mb-0">
        <a
          className={cn([
            'font-bold no-underline border-l-4 block border-black',
            'md:text-xl md:pl-4',
            'max-md:pl-[calc(theme(spacing.4)-5px)] max-md:py-1 max-md:text-lg',
          ])}
          href={`/posts/${slug}`}
          title={post.title}>
          Read More
        </a>
      </footer>
    </article>
  );
}
