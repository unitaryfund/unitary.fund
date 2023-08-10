import Arrow from '~/assets/svg/arrow.svg?raw';
import MenuPlus from '~/assets/svg/menu-plus.svg?raw';
import MenuMinus from '~/assets/svg/menu-minus.svg?raw';
import MenuChevron from '~/assets/svg/menu-chevron.svg?raw';
import { cn } from '~/util/cn';

export type IconName = 'arrow' | 'plus' | 'minus' | 'chevron';

const icons = {
  arrow: Arrow,
  plus: MenuPlus,
  minus: MenuMinus,
  chevron: MenuChevron,
} satisfies Record<IconName, string>;

type IconProps = {
  icon: IconName;
  className?: string;
};

export function Icon({ icon, className }: IconProps) {
  if (!icon) return null;

  return (
    <div className={cn(['icon', className])} dangerouslySetInnerHTML={{ __html: icons[icon] }} />
  );
}
