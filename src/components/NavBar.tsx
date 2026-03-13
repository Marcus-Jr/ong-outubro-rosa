import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled, useTheme } from '@mui/material/styles';

export const StyledNavLink = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.tertiary.contrastText,
  fontWeight: 600,
  fontSize: "1rem",
  transition: "0.3s",
  "&:hover": {
    opacity: 0.8,
  },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: "none",
  },
  [theme.breakpoints.up('md')]: {
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(6),
  },
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: "none",
  },
  display: "flex",
  justifyContent: "flex-end",
}));

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();

  const NavBar = styled("div")(() => ({
    background: "linear-gradient(135deg, #730217 0%, #D9326F 100%)",
    color: theme.palette.secondary.contrastText,
    width: "100%",
  }));

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false);
    }
  };

  const navItems = [
    { label: "Sobre", id: "about" },
    { label: "Prevenção", id: "prevention" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <NavBar>
          {/* Desktop */}
          <StyledDesktopToolbar>
            {navItems.map((item) => (
              <StyledNavLink
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item.id);
                }}
              >
                {item.label}
              </StyledNavLink>
            ))}
          </StyledDesktopToolbar>

          {/* Mobile */}
          <StyledMobileToolbar>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: theme.palette.tertiary.contrastText }}
            >
              <MenuIcon />
            </IconButton>
          </StyledMobileToolbar>
        </NavBar>
      </AppBar>

      {/* Drawer mobile */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            background: "linear-gradient(135deg, #730217 0%, #D9326F 100%)",
            boxShadow: "none",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: theme.palette.tertiary.contrastText }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 3, pb: 3, display: "flex", flexDirection: "column", gap: 1 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <StyledNavLink
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item.id);
                }}
                sx={{ fontSize: "1.2rem", py: 1 }}
              >
                {item.label}
              </StyledNavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}