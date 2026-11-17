/** One page of a list, in the same shape whatever the API sent. Made by `parsePage`. */
export interface Page<T> {
  items: T[];
  page: number;
  perPage: number;
  total: number;
  lastPage: number;
}
