import { styled } from '@mui/material/styles';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const StyledWrapper = styled(Wrapper)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    justifyContent: 'center',
  },
})) as typeof Wrapper;

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <StyledWrapper>
      <div className={className}>{children}</div>
    </StyledWrapper>
  );
};

const StyledContainer = styled(Container)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  overflowX: 'hidden',
  [theme.breakpoints.up('sm')]: {
    width: 414,
    height: 736,
  },
})) as typeof Container;

export default StyledContainer;
