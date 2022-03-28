import Box from '@mui/material/Box';
import { User } from '../../../types/user';

export type ProfileProps = {
  user?: User;
};

export const Profile = ({ user }: ProfileProps) => {
  return (
    <Box sx={{ padding: { xs: '16px', md: '64px' }, width: '100%' }}>
      {user && (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box>
            Name: {user.name.firstname} {user.name.lastname}
          </Box>
          <Box>E-mail: {user.email}</Box>
        </Box>
      )}
    </Box>
  );
};
