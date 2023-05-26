import React from 'react';
import clsx from 'clsx';
import { Fab, IconButton } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useNavigate } from 'react-router-dom';

import {
  CalendarIcon,
  ExpensesIcon,
  HomeIcon,
  PlusIcon,
  SettingsIcon,
} from './Icons';

const useStyles = makeStyles()(() => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.09)',
    padding: '12px 28px',
  },
  item: {
    flex: '0 1 auto',
    cursor: 'pointer',
  },
}));

interface BottomNavigationItemProps {
  className?: string;
  children: React.ReactNode;
}

const BottomNavigationItem: React.FC<BottomNavigationItemProps> = ({
  className,
  children,
}) => {
  return <div className={className}>{children}</div>;
};

interface BottomNavigationProps {
  className?: string;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ className }) => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = React.useState(0);

  const items = React.useMemo(
    () => [
      {
        content: <HomeIcon />,
        onClickCallback: () => {
          navigate('/');
        },
        key: 'home',
        type: 'icon',
      },
      {
        content: <ExpensesIcon />,
        onClickCallback: () => {
          navigate('/expenses');
        },
        key: 'expenses',
        type: 'icon',
      },
      {
        content: (
          <Fab color='primary'>
            <PlusIcon />
          </Fab>
        ),
        onClickCallback: () => {
          console.log('add');
        },
        key: 'add',
        type: 'button',
      },
      {
        content: <CalendarIcon />,
        onClickCallback: () => {
          navigate('/calendar');
        },
        key: 'calendar',
        type: 'icon',
      },
      {
        content: <SettingsIcon />,
        onClickCallback: () => {
          navigate('/settings');
        },
        key: 'settings',
        type: 'icon',
      },
    ],
    [activeIndex, navigate],
  );

  return (
    <div className={clsx(classes.container, className)}>
      {items.map((el, index) => (
        <BottomNavigationItem className={classes.item} key={el.key}>
          {el.type === 'icon' ? (
            <IconButton
              onClick={() => {
                setActiveIndex(index);
                el.onClickCallback();
              }}
              color={index === activeIndex ? 'primary' : 'info'}
            >
              {el.content}
            </IconButton>
          ) : (
            el.content
          )}
        </BottomNavigationItem>
      ))}
    </div>
  );
};

export default BottomNavigation;
