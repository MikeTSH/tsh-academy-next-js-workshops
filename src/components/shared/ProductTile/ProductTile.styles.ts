import { Styles } from 'styles/theme';

export const styles: Record<string, Styles> = {
  productCard: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  productCardWrapper: {
    padding: '16px',
  },
  productCardImage: {
    width: '100%',
    height: '300px',
    position: 'relative',
  },
  productCardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  productCardRating: {
    display: 'flex',
    alignItems: 'center',
    margin: '8px 0',
  },
  productCardRatingStart: {
    marginRight: '4px',
    color: 'orange',
  },
  productCardPrice: {
    fontWeight: '500',
  },
};
