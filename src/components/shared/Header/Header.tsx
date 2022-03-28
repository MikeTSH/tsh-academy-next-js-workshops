import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Autocomplete, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useRouter } from 'next/router';
import { useCategories } from '../../../hooks/useCategories';
import { routing } from '../../../lib/routing';
import { styles } from './Header.styles';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Link } from 'components/ui/Link';
import { LoginModal } from '../LoginModal/LoginModal';

export const Header = () => {
  const router = useRouter();
  const [category, setCategory] = useState(
    Array.isArray(router.query.category) ? router.query.category[0] : router.query.category,
  );
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const { data: categories } = useCategories();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    setLoginModalOpen(true);
    handleMenuClose();
  };

  const handleLoginModalClose = () => {
    setLoginModalOpen(false);
  };

  const onSelectCategory = (event: React.SyntheticEvent<Element, Event>, category: string | string[] | null) => {
    if (category && typeof category === 'string') {
      router.push(routing.search(category));
      setCategory(category);
    }
  };

  const { status: userSessionStatus } = useSession();

  useEffect(() => {
    setCategory(Array.isArray(router.query.category) ? router.query.category[0] : router.query.category);
  }, [router.query?.category]);

  return (
    <>
      {/* TODO[PERF-3]: Code splitting */}
      <LoginModal isOpen={isLoginModalOpen} handleClose={handleLoginModalClose} />
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar sx={styles.headerToolbar}>
          <Link href={routing.homepage} sx={styles.logoLink}>
            <Typography variant="h6" noWrap component="div" color="black">
              Awesome store
            </Typography>
          </Link>
          <Autocomplete
            disablePortal
            value={category?.toString() ?? null}
            id="combo-box-demo"
            options={categories ?? []}
            sx={styles.headerAutocomplete}
            onChange={onSelectCategory}
            renderInput={(params) => <TextField {...params} variant="outlined" label="Category" />}
          />
          <Box sx={styles.headerActions}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="primary"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {userSessionStatus === 'authenticated' ? (
                <div>
                  <Link href="/profile">
                    <MenuItem>Profile</MenuItem>
                  </Link>
                  <MenuItem
                    onClick={() => {
                      void signOut({ callbackUrl: '/' });
                    }}
                  >
                    Log out
                  </MenuItem>
                </div>
              ) : (
                <MenuItem onClick={handleLoginClick}>Login</MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
