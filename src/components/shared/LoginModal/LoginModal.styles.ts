import { Styles } from 'styles/theme';

export const styles: Record<string, Styles> = {
  loginModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginModalInnerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
    padding: '32px',
  },
  loginModalAvatar: {
    m: 1,
    bgcolor: 'secondary.main',
  },
  loginModalForm: {
    mt: 1,
  },
  loginModalButton: {
    mt: 3,
    mb: 2,
  },
};
