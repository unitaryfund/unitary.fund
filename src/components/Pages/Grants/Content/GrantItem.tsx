import { ISO_3166_ALPHA_2_MAPPINGS } from '~/util/iso3166';
import Pin from '~/assets/svg/pin.svg?raw';
import type { FilterSpec } from '~/hooks/useFilter';
import Markdown from 'markdown-to-jsx';

type GrantItemProps = {
  grant: FilterSpec['grant']['items'][0];
};

export function GrantItem({ grant: { data: grant, body } }: GrantItemProps) {
  return (
    <div
      className="flex flex-col w-full sm:w-[calc(100%/3-(1rem*2/3))] sm:min-w-[320px] flex-grow border-yellow-400 border-l-4"
      data-tags={grant.tags?.join(',')}>
      <time
        className="block text-sm font-mono border-black border-b -ml-1 pl-3 pb-1"
        dateTime={`${grant.year}-${grant.month}-${grant.day}`}>
        {`${grant.month}`}.{grant.day}.{grant.year}
      </time>
      <div className="pl-4 pt-2 pb-5 uppercase font-bold font-mono">{grant.name}</div>
      <div className="pl-4 min-h-[150px] text-sm flex-grow">
        <Markdown children={body} />
      </div>
      {!!grant.country && (
        <div className="uppercase flex items-center pr-2 -ml-[4px] font-mono tracking-wider text-sm border-b border-black w-fit">
          <div
            className="flex items-center mr-1 px-1 py-2 bg-black [&_svg]:h-4 [&_svg]:w-auto"
            dangerouslySetInnerHTML={{ __html: Pin }}
          />
          {!grant.country.includes(',') &&
            grant.country in ISO_3166_ALPHA_2_MAPPINGS &&
            ISO_3166_ALPHA_2_MAPPINGS[grant.country as keyof typeof ISO_3166_ALPHA_2_MAPPINGS]}
          {grant.country.includes(',') &&
            grant.country
              .split(',')
              .map((country) => country.trim())
              .map(
                (country) =>
                  country in ISO_3166_ALPHA_2_MAPPINGS &&
                  ISO_3166_ALPHA_2_MAPPINGS[country as keyof typeof ISO_3166_ALPHA_2_MAPPINGS]
              )
              .filter(Boolean)
              .join(', ')}
        </div>
      )}
    </div>
  );
}
