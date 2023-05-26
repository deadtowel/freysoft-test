import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  wrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  container: {
    width: '100%',
    height: '100vh',
    overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {
      width: 414,
      height: 736,
    },
  },
}));

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { classes } = useStyles();

  return <div className={classes.wrapper}>{children}</div>;
};

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Wrapper>
      <div className={classes.container}>{children}</div>
    </Wrapper>
  );
};

export default Container;
