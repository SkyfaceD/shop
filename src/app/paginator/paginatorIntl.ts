import { MatPaginatorIntl } from '@angular/material/paginator';

export function CustomPaginator() {
  const paginatorIntl = new MatPaginatorIntl();
  
  paginatorIntl.itemsPerPageLabel = 'Количество товаров:';
  paginatorIntl.nextPageLabel = 'Следующая страница'
  paginatorIntl.previousPageLabel = 'Предыдущая страница'
  paginatorIntl.getRangeLabel = rangeLabel

  return paginatorIntl;
}

const rangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 из ${length}`; }
  
  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} из ${length}`;
}