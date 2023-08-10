import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/Ui/Content/Accordion/Accordion';
import {
  ColumnContentProps,
  getColumnStyles,
} from '~/components/Ui/Content/Column/Column';
import { cn } from '~/util/cn';

export default function AccordionColumn({
  title,
  titleStyle = 'simple',
  children,
}: ColumnContentProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem className="border-b-0" value="item-1">
        <AccordionTrigger
          className={cn([
            ...getColumnStyles(titleStyle),
            'py-0 px-2 hover:no-underline',
          ])}
        >
          {title}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
