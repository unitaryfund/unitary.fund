import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '~/util/cn';
import { Icon, IconName } from '~/components/Ui/Icon';

type HTMLButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type HTMLAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

type CommonButtonProps = {
  icon: IconName;
  floatingIcon?: boolean;
  active?: boolean;
  current?: boolean;
};

type ButtonProps = PropsWithChildren<
  | (HTMLButtonProps & { href?: never } & CommonButtonProps)
  | (HTMLAnchorProps & { href: string } & CommonButtonProps)
>;

export default function Button({
  children,
  className,
  icon,
  floatingIcon = false,
  active,
  current,
  href,
  ...props
}: ButtonProps) {
  const buttonClassName = cn([
    'grow relative flex h-[--navigation-row-height] justify-between items-center px-2',
    'bg-gray-200 text-black text-xs font-bold no-underline antialiased',
    'hover:bg-black hover:text-white transition-colors duration-100 ease-in-out',
    'nav-icon:pl-2',
    floatingIcon &&
      'nav-icon:absolute nav-icon:top-1/2 nav-icon:transform nav-icon:-translate-y-1/2 nav-icon:right-2',
    active && 'bg-black text-white',
    current && 'bg-black text-yellow-400 hover:text-yellow-400',
    className,
  ]);

  const iconOutput = <>{icon && <Icon icon={icon} />}</>;

  if (href) {
    const anchorProps = props as HTMLAnchorProps;

    return (
      <a href={href} className={buttonClassName} {...anchorProps}>
        <span className="label">{children}</span>
        {iconOutput}
      </a>
    );
  } else {
    const buttonProps = props as HTMLButtonProps;

    return (
      <button className={buttonClassName} {...buttonProps}>
        <span className="label">{children}</span>
        {iconOutput}
      </button>
    );
  }
}
