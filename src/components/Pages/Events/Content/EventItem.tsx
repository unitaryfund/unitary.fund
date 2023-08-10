import type { CollectionEntry } from 'astro:content';
import {
  useState,
  type MouseEventHandler,
  PropsWithChildren,
  DetailedHTMLProps,
  HTMLAttributes,
  Fragment,
} from 'react';
import { css } from '@emotion/css';
import Markdown from 'markdown-to-jsx';
import { CloudinaryImage } from '~/components/Ui/Content/Image/CloudinaryImage';
import Minus from '~/assets/svg/minus.svg?raw';
import Plus from '~/assets/svg/plus.svg?raw';
import Divider from '~/assets/svg/divider.svg?raw';
import { cn } from '~/util/cn';

type EventItemProps = {
  event: CollectionEntry<'event'>;
};

export default function EventItem({ event }: EventItemProps) {
  const [activeHeadings, setActiveHeadings] = useState<number[]>([]);

  const handleMainClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const headings = event.currentTarget.querySelectorAll('h2');
    const headingIndex = Array.from(headings).findIndex((heading) => {
      return heading === event.target;
    });

    setActiveHeadings((activeHeadings) => {
      if (activeHeadings.includes(headingIndex)) {
        return activeHeadings.filter((heading) => heading !== headingIndex);
      } else {
        return [...activeHeadings, headingIndex];
      }
    });
  };

  let headingDisplayStyles = '';

  for (const headingIndex of activeHeadings) {
    headingDisplayStyles += `
      & h2:nth-of-type(${headingIndex + 1}) ~ :not(h2):not(h2:nth-of-type(${
      headingIndex + 2
    }) ~ *) {
        display: block;
      }
    `;
  }

  let headingRenderIndex = -1;

  const ContentHeading = ({
    children,
    ...props
  }: PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
  >) => {
    headingRenderIndex++;

    return (
      <h2
        {...props}
        data-heading-index={headingRenderIndex}
        className="flex font-manrope normal-case text-lg justify-between items-center">
        <span className="pointer-events-none">{children}</span>
        <span
          dangerouslySetInnerHTML={{
            __html: activeHeadings.includes(headingRenderIndex) ? Minus : Plus,
          }}
          className="pointer-events-none"
        />
      </h2>
    );
  };

  return (
    <article className="event flex flex-col border-l border-black">
      <header className="flex items-center gap-x-3 pl-2 pb-2 border-b border-black max-sm:flex-wrap max-sm:leading-tight">
        <time
          className="font-mono"
          dateTime={`${event.data.year}-${event.data.month}-${event.data.day}`}>
          {`${event.data.month}`}.{event.data.day}.{event.data.year}
        </time>
        <span
          dangerouslySetInnerHTML={{
            __html: Divider,
          }}
          className="pointer-events-none"
        />
        <div className="font-mono uppercase">{event.data.time}</div>
        <div className="font-bold sm:ml-1 max-sm:w-full max-sm:text-lg">{event.data.speaker}</div>
      </header>
      <div className="p-2 mb-6">{event.data.title}</div>
      {event.data.image && (
        <div className="pl-2 max-w-[450px]">
          <CloudinaryImage id={event.data.image} layout="fullWidth" />
        </div>
      )}
      <main
        className={cn([
          'p-2 pb-0 mt-2',
          css`
            ${headingDisplayStyles}
          `,
        ])}
        onClick={handleMainClick}>
        <Markdown
          children={event.body}
          options={{
            wrapper: Fragment,
            // createElement(type, props, children) {
            //   return <div className="parent">{createElement(type, props, children)}</div>;
            // },
            overrides: { h2: { component: ContentHeading } },
          }}
        />
        {/* {event.body} */}
        {/* </Markdown> */}
      </main>
    </article>
  );
}
