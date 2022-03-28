export type SearchCriteria = {
  category?: string;
  price?: RangeFilter;
  sort?: string;
};

export type RangeFilter = {
  from?: string;
  to?: string;
};
