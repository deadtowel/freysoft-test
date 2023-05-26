import clsx from 'clsx';
import { makeStyles } from 'tss-react/mui';
import { IconButton, Typography } from '@mui/material';

import { NotificationsIcon } from './Icons';
import ProfilePicture from '../assets/avatar.png';

const useStyles = makeStyles()(() => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '36px 28px',
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: '28px',
  },
}));

interface HeaderProps {
  className?: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ className, title }) => {
  const { classes } = useStyles();

  return (
    <header className={clsx(classes.container, className)}>
      <img src={ProfilePicture} alt='Profile.' />
      <Typography variant='h1' className={classes.title}>
        {title}
      </Typography>
      <IconButton color='inherit'>
        <NotificationsIcon fontSize='medium' />
      </IconButton>
    </header>
  );
};

export default Header;
