import type { PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';
import { cn } from '~/util/cn';
import AccordionColumn from '~/components/Ui/Content/Column/AccordionColumn';

export type ColumnProps = PropsWithChildren<{
  title?: string;
  isCollapsible?: boolean;
  titleStyle?: 'simple' | 'marked' | 'strike' | 'solid';
}>;

export type ColumnContentProps = Omit<ColumnProps, 'isCollapsible'>;

export function getColumnStyles(titleStyle: string) {
  return [
    'uppercase font-bold text-base md:text-xl font-mono tracking-widest md:py-1 px-3',
    titleStyle === 'simple' &&
      'bg-light-grey md:bg-transparent border-solid border-b border-b-black',
    titleStyle === 'marked' &&
      'border-solid border-b border-b-black bg-yellow-400',
    titleStyle === 'strike' && 'text-white bg-black',
    titleStyle === 'solid' && 'solid-heading',
  ];
}

const DefaultColumn = ({
  title,
  titleStyle = 'simple',
  children,
}: ColumnContentProps) => {
  return (
    <>
      {title && (
        <h3 className={cn([...getColumnStyles(titleStyle)])}>{title}</h3>
      )}
      {children}
    </>
  );
};

const CollapsibleColumn = ({
  title,
  titleStyle = 'simple',
  children,
}: ColumnContentProps) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <>
      {isDesktop && (
        <DefaultColumn
          title={title}
          titleStyle={titleStyle}
          children={children}
        />
      )}
      {isMobile && (
        <AccordionColumn
          title={title}
          titleStyle={titleStyle}
          children={children}
        />
      )}
    </>
  );
};

export default function Column({
  title,
  titleStyle,
  isCollapsible,
  children,
}: ColumnProps) {
  return (
    <>
      {isCollapsible && (
        <CollapsibleColumn
          title={title}
          titleStyle={titleStyle}
          children={children}
        />
      )}
      {!isCollapsible && (
        <DefaultColumn
          title={title}
          titleStyle={titleStyle}
          children={children}
        />
      )}
    </>
  );
}
