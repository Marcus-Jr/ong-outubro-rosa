import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled, useTheme } from '@mui/material/styles';

export const StyledNavLink = styled("a")(( {theme} ) => ({
  textDecoration: "none",
  color: `${theme.palette.tertiary.contrastText}`,
  fontWeight: 600,
  fontSize: "1rem",
  transition: "0.3s",
  "&:hover": {
    opacity: 0.8,
  },
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: "flex",
    justifyContent: "end",
  },
  [theme.breakpoints.up('md')]: {
    display: "none",
  },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: "none",
  },
  [theme.breakpoints.up('md')]: {
    display: "flex",
    justifyContent: "right",
    gap: theme.spacing(6),
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleClose();
    }
  };

  const NavBar = styled("div")(() => ({
    background: "linear-gradient(135deg, #730217 0%, #D9326F 100%)",
    color: theme.palette.secondary.contrastText,
    width: "100%",
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <NavBar>
          {/* Mobile */}
          <StyledMobileToolbar>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleSmoothScroll("about")}>
                <StyledNavLink href="#about">Sobre</StyledNavLink>
              </MenuItem>
              <MenuItem onClick={() => handleSmoothScroll("skills")}>
                <StyledNavLink href="#prevention">Prevenção</StyledNavLink>
              </MenuItem>
            </Menu>
          </StyledMobileToolbar>

          {/* Desktop */}
          <StyledDesktopToolbar>
            <MenuItem onClick={() => handleSmoothScroll("about")}>
              <StyledNavLink href="#about">Sobre</StyledNavLink>
            </MenuItem>
            <MenuItem onClick={() => handleSmoothScroll("skills")}>
              <StyledNavLink href="#prevention">Prevenção</StyledNavLink>
            </MenuItem>
          </StyledDesktopToolbar>
        </NavBar>
      </AppBar>
    </Box>
  );
}
