import BottomNavigation from './BottomNavigation';
import Header from './Header';
import { makeStyles } from 'tss-react/mui';

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
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.layout}>
      <Header className={classes.header} />
      <main className={classes.main}>{children}</main>
      <BottomNavigation className={classes.footer} />
    </div>
  );
};

export default Layout;
