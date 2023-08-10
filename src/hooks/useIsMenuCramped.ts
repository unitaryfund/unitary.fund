import { Ref, RefCallback, useState } from 'react';
import { useIsomorphicLayoutEffect, useMeasure } from 'react-use';
import mergeRefs from 'merge-refs';

export type UseIsMenuCrampedResult<E extends HTMLUListElement = HTMLUListElement> = [
  Ref<E> | RefCallback<E>,
  boolean
];

const defaultState = false;

export default function useIsMenuCramped<
  E extends HTMLUListElement = HTMLUListElement
>(): UseIsMenuCrampedResult<E> {
  const [element, menuRef] = useState<E | null>(null);
  const [measureRef, rect] = useMeasure<E>();
  const [isCramped, setIsCramped] = useState<boolean>(defaultState);

  useIsomorphicLayoutEffect(() => {
    if (element) {
      const anyButtonCramped = !![...element.querySelectorAll('a')].find((el, i) => {
        const label = el.querySelector('.label');
        const icon = el.querySelector('.icon');

        if (label && icon) {
          const labelRect = label.getBoundingClientRect();
          const iconRect = icon.getBoundingClientRect();

          if (labelRect.right >= iconRect.left) {
            return true;
          } else {
            return false;
          }
        }
      });

      setIsCramped(!!anyButtonCramped);
    }
  }, [rect]);

  return [mergeRefs<E>(measureRef, menuRef), isCramped];
}
