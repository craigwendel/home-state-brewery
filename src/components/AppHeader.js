import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Links from './Links';
import SocialLinks from './SocialLinks';
import MobileMenu from './MobileMenu';
import logo from '../images/HSB-Horizontal.png';

const useStyles = makeStyles(theme => ({
  header: {
    minHeight: 60,
    height: 64,
    position: 'fixed',
    zIndex: 100,
    backgroundColor: '#fff',
    width: '100%',
  },
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 10,
  },
  menu: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  links: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
  },
  mobileMenu: {
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoBar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      display: 'block',
    },
  },
  logo: {
    width: 200,
    marginRight: '40px',
    [theme.breakpoints.up('sm')]: {
      width: 200,
      margin: '0rem 2rem 0rem 1rem',
    },
  },
  menuLogo: {
    width: 150,
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function AppHeader(props) {
  const classes = useStyles();
  return (
    <>
      <Toolbar
        disableGutters
        variant="dense"
        classes={{ root: classes.header }}
      >
        <MobileMenu />
        <div className={classes.logoBar}>
          <Link to="/XaeA-12">
            <img
              className={classes.logo}
              src={logo}
              alt="home state brewing logo"
            />
          </Link>
        </div>
        <div className={classes.links}>
          <Links direction="row" header />
          <SocialLinks color="primary" />
        </div>
      </Toolbar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};
