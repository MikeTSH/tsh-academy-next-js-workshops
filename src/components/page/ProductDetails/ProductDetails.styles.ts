import { Styles } from 'styles/theme';

export const styles: Record<string, Styles> = {
  productPage: {
    padding: { xs: '16px', md: '64px' },
    width: '100%',
  },
  productDetails: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
  },
  productPhoto: {
    width: { xs: '100%', md: '50%' },
    height: '500px',
    position: 'relative',
  },
  productInfo: {
    width: { xs: '100%', md: '50%' },
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '16px',
  },
  productTextsArea: {
    marginTop: { xs: '32px', md: '0' },
  },
  productDescription: {
    marginTop: '32px',
  },
  productActionArea: {
    width: '100%',
    margin: 'auto 0 0 0',
  },
  productValues: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '32px',
  },
  productRating: {
    display: 'flex',
    alignItems: 'center',
    margin: '8px 0',
  },
  productRatingStar: {
    marginRight: '4px',
    color: 'orange',
    fontSize: '32px',
  },
  productPrice: {
    fontWeight: '500',
  },
  productBuyButton: {
    width: '100%',
  },
  relatedProductsWrapper: {
    margin: '100px 0 0 0',
  },
  relatedProductsGrid: {
    width: '100%',
    margin: '32px 0 0 0',
  },
  relatedProductsItem: {
    padding: '16px',
  },
};
