import type { z } from 'astro:content';
import { useEffect, type CSSProperties, ReactNode } from 'react';
import { useWindowSize } from 'react-use';
import { cn } from '~/util/cn';
import pupa from 'pupa';
import social from '~/data/social.json';
import { useStore } from '@nanostores/react';
import Button from '~/components/Layout/Header/Navigation/Button';
import type { navigationSchema } from '~/content/config';
import useIsMenuCramped from '~/hooks/useIsMenuCramped';
import { navigationActiveSubmenuAtom, navigationOpenAtom } from '~/util/store';

type NavigationProps = {
  menu: z.infer<typeof navigationSchema> | null;
};

function getMenuKey(item: z.infer<typeof navigationSchema>['items'][0]) {
  return item.link + item.text;
}

function processLink(link: string) {
  if (link.match(/\{[^}]*\}/)) {
    link = pupa(link, {
      social,
    });
  }

  return link;
}

export default function Menu({ menu }: NavigationProps) {
  const isOpen = useStore(navigationOpenAtom);
  const activeSubmenu = useStore(navigationActiveSubmenuAtom);
  const { width } = useWindowSize();
  const [isCrampedRef, isCramped] = useIsMenuCramped<HTMLUListElement>();
  const isWide = width >= 1024;
  const isMobile = !isWide || isCramped;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }

    if (isMobile) {
      document.body.classList.add('nav-mobile');
    } else {
      document.body.classList.remove('nav-mobile');
    }

    return () => {
      document.body.classList.remove('nav-open');
      document.body.classList.remove('nav-mobile');
    };
  }, [isOpen, isMobile]);

  if (!menu) {
    console.error('Problem with menu format');
    return null;
  }

  let submenu: ReactNode = null;
  let marginPercent = 0;

  for (const item of menu.items) {
    const key = getMenuKey(item);

    if (item.children && activeSubmenu === key) {
      submenu = (
        <div
          className="grid-in-submenu relative nav-desktop:ml-[--margin-percent] nav-desktop:border-t nav-desktop:border-white"
          style={
            {
              '--margin-percent': `calc((100% - var(--menu-trigger-width)) * 0.${
                (marginPercent * 100).toString().split('.')[0]
              })`,
            } as CSSProperties
          }>
          <ul
            className={cn([
              'm-0 w-full flex no-arrow-list',
              'nav-mobile:flex-col',
              'nav-desktop:absolute nav-desktop:top-0 nav-desktop:left-0 nav-desktop:flex-wrap nav-desktop:gap-[2px]',
              !isOpen && 'hidden',
            ])}>
            {item.children.map(({ link, text }) => (
              <li className="flex grow" key={link}>
                <Button
                  className="min-w-[180px] nav-desktop:hover:text-yellow-400 nav-mobile:border-b nav-mobile:border-white"
                  href={processLink(link)}
                  active={true}
                  icon="chevron">
                  {text}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      );
      break;
    }

    marginPercent += 100 / menu.items.length;
  }

  const menuItems = (
    <>
      {menu.items.map(({ link, text }) => {
        const key = getMenuKey({ link, text });
        const isCurrent = activeSubmenu === key;

        const buttonClassName = cn([
          'nav-desktop:border-r nav-desktop:border-black nav-desktop:hover:border-white nav-desktop:hover:text-yellow-400',
          'nav-mobile:border-b nav-mobile:border-black',
          isCurrent && 'nav-desktop:border-white nav-mobile:bg-yellow-400 nav-mobile:text-black',
        ]);

        const handleClick = () => {
          if (activeSubmenu === key) {
            navigationActiveSubmenuAtom.set(null);
          } else {
            navigationActiveSubmenuAtom.set(key);
          }
        };

        return (
          <li className="grow flex nav-mobile:flex-col" key={key}>
            {!link && link !== '#' && (
              <Button
                className={buttonClassName}
                icon={isCurrent ? 'minus' : 'plus'}
                floatingIcon={true}
                onClick={handleClick}
                active={isCurrent}
                current={isCurrent}>
                {text}
              </Button>
            )}
            {link && link !== '#' && (
              <Button
                href={processLink(link)}
                className={buttonClassName}
                icon="chevron"
                floatingIcon={true}>
                {text}
              </Button>
            )}
            {isMobile && !!submenu && isCurrent && submenu}
          </li>
        );
      })}
    </>
  );

  return (
    <>
      {/* Mobile */}
      <ul
        className={cn([
          'm-0 flex flex-col fixed top-[--logo-height-mobile] left-0 right-0 no-arrow-list',
          (!isOpen || !isMobile) && 'hidden',
        ])}>
        {menuItems}
      </ul>
      {/* Desktop */}
      <ul
        className={cn([
          'm-0 grid-in-menu grid grid-cols-[--nav-cols] no-arrow-list w-[calc(min(100vw,theme(screens.2xl))-var(--logo-width)-var(--menu-trigger-width)-theme(spacing.10))]',
          (!isOpen || isMobile) && 'invisible pointer-events-none',
        ])}
        style={
          {
            '--nav-cols': `repeat(${menu.items.length}, 1fr)`,
          } as CSSProperties
        }
        ref={isCrampedRef}>
        {menuItems}
      </ul>
      {!isMobile && submenu}
    </>
  );
}
