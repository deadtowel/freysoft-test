import { Outlet } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

import BottomNavigation from './BottomNavigation';
import Header from './Header';

const useStyles = makeStyles()(() => ({
  layout: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: `
    'header'
    'main'
    'footer'
    `,
  },
  header: {
    gridArea: 'header',
  },
  main: {
    gridArea: 'main',
  },
  footer: {
    gridArea: 'footer',
  },
}));

interface LayoutProps {
  headerTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ headerTitle }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.layout}>
      <Header className={classes.header} title={headerTitle} />
      <main className={classes.main}>
        <Outlet />
      </main>
      <BottomNavigation className={classes.footer} />
    </div>
  );
};

export default Layout;
