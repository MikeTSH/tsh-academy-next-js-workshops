import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ErrorPage = () => {
  return (
    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h4" fontWeight="500">
        Internal Error
      </Typography>
    </Box>
  );
};

export default ErrorPage;
