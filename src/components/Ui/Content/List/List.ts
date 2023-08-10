export function getTextListStyles(columns: number) {
  return [
    columns === 1 && 'columns-1',
    columns === 2 && 'columns-1 md:columns-2',
    columns === 3 && 'columns-1 md:columns-2 lg:columns-3',
    columns === 4 && 'columns-1 md:columns-2 lg:columns-3 xl:columns-4',
  ];
}
