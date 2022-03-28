import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styles } from './LoginModal.styles';

type LoginModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export const LoginModal = ({ isOpen, handleClose }: LoginModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={styles.loginModal}
    >
      <Box sx={styles.loginModalInnerWrapper}>
        <Avatar sx={styles.loginModalAvatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={styles.loginModalForm}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" sx={styles.loginModalButton}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
