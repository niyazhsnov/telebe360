import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import css from './navbar.module.css';
import Categories from '../../utils/categories';
import Backdrop from '@mui/material/Backdrop';
import Logout from '../logout_modal/modal';
import Link from 'next/link';
import Image from 'next/image';
import Feedback from '../feedback_modal/modal'
import { Feed } from '@mui/icons-material';
import Profile from '../profile_dropdown/dropdown'
import Notification from '../notification_modal/index'
const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  display: 'flex',
  borderRight: 'none',
  boxShadow: 'none',
  paddingLeft: '0.6vw',
  justifyContent: 'space-around',
  borderTopRightRadius: '20px',
  borderBottomRightRadius: '20px',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  display: 'flex',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  [theme.breakpoints.down('sm')]: {
    transform: 'translate(0px)',
  },
  borderRight: 'none',
  boxShadow: 'none',
  paddingLeft: '0.6vw',
  justifyContent: 'space-around',
  borderTopRightRadius: '20px',
  borderBottomRightRadius: '20px',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  marginLeft: open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`,
  width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - ${theme.spacing(7)} - 1px)`,
  ...(open && {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    width: '100%',
    display: open ? 'none' : 'block',
  },
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    position: 'relative',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', position: 'relative', zIndex: '99999', marginBottom: '100px' }}>
      <CssBaseline />
      <AppBar open={open} className={css.appbar}>
        <Toolbar className={css.navbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <Image src='/Burger.svg' className={css.hamburger} width='0' height='0' />
          </IconButton>
       
            <div className={css.nav_div_left}>
              <span className={css.mobile_fav}><img src='/Booking.svg' /></span>
              <div className={css.search}> <input type='search' placeholder='Axtarış üçün toxunun' className={css.search_input} /> <img src='search.svg' type='submit' className={css.search_icon} /></div>
            </div>
            <div className={css.nav_div_right}>
             <span  className={css.feedback}> <Feedback /></span>
              <span className={css.favourites_div}> <img src='/home/bookmark.svg' /> Favourites</span>
              <div className={css.noti_and_ticket}>
              <Link href='/tickets'><img src='/tiicket.svg' className={css.ticket_logo} /></Link>
              <Notification />
              </div>
              <span>
              <Profile /></span>
            </div>
          

         
        </Toolbar>
        <Box className={`${css.chevron_div} ${!open ? css.closed : ''}`}>
          {open ? (
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon className={css.chevron_icon} />
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerOpen}>
              <ChevronRightIcon className={css.chevron_icon} />
            </IconButton>
          )}
        </Box>
      </AppBar>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer - 1 }}
        open={open}
        onClick={handleDrawerClose}
      />
      <Box sx={{ bgcolor: 'black' }}>
        <Drawer sx={{}} variant="permanent" open={open} className={css.sidebar}>
          <div className={`${css.logo} ${open ? css.logoOpen : css.logoClosed}`}>
            <Image className={css.sidebar_360img} width={0} height={0} src='/wide360logo.svg' />
          </div>
          <div><Categories className={css.category} /></div>
          <div className={css.sidebar_bottom_div}>
            <Link href='/settings'><img src='/settings.svg' className={css.bottom_div_img} /></Link>
            <Link href=''><img src='/contact.svg' className={css.bottom_div_img} /></Link>
            <span><Logout /></span>
          </div>
        </Drawer>

      </Box>
    </Box>
  );
}
