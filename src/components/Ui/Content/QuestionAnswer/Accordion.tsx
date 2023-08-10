import { useState, type PropsWithChildren, MouseEventHandler } from 'react';
import { css } from '@emotion/css';
import { cn } from '~/util/cn';

type AccordionProps = PropsWithChildren<{ className?: string }>;

export default function Accordion({ className, children }: AccordionProps) {
  const [activeHeadings, setActiveHeadings] = useState<number[]>([]);

  const handleContainerClick: MouseEventHandler<HTMLDivElement> = (event) => {
    console.log(event.currentTarget);
    const headings = event.currentTarget.querySelectorAll('h2');
    const headingIndex = Array.from(headings).findIndex((heading) => {
      return heading === event.target;
    });

    console.log(headingIndex);

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

      & h2:nth-of-type(${headingIndex + 1}) svg:last-of-type {
        display: block;
      }

      & h2:nth-of-type(${headingIndex + 1}) svg:first-of-type {
        display: none;
      }
    `;
  }

  return (
    <div
      onClick={handleContainerClick}
      className={cn([
        'question-answer-accordion',
        className,
        css`
          ${headingDisplayStyles}
        `,
      ])}
    >
      {children}
    </div>
  );
}
