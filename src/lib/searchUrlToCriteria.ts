import { ParsedUrlQuery } from 'querystring';
import { SearchCriteria } from '../types/criteria';

const stabilizeQueryValue = (value?: string | string[]) => {
  if (value && Array.isArray(value)) {
    return value[0];
  }

  return value;
};

export const searchUrlToCriteria = (query: ParsedUrlQuery): SearchCriteria => {
  const category = stabilizeQueryValue(query?.category);
  const priceFrom = stabilizeQueryValue(query?.priceFrom);
  const priceTo = stabilizeQueryValue(query?.priceTo);
  const sort = stabilizeQueryValue(query?.sort);

  const price =
    priceTo || priceFrom
      ? {
          ...(priceFrom ? { from: priceFrom } : undefined),
          ...(priceTo ? { to: priceTo } : undefined),
        }
      : undefined;

  return Object.entries({ category, price, sort }).reduce<SearchCriteria>((accumulator, [key, value]) => {
    if (typeof value !== 'undefined') {
      accumulator[key as keyof SearchCriteria] = value as any;
    }

    return accumulator;
  }, {});
};
