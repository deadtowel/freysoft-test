import { styled } from '@mui/material/styles';

import BottomNavigation from './BottomNavigation';
import Header from './Header';

const StyledHeader = styled(Header)(() => ({
  gridArea: 'header',
}));

const StyledMain = styled('main')(() => ({
  gridArea: 'main',
}));

const StyledBottomNavigation = styled(BottomNavigation)(() => ({
  gridArea: 'footer',
}));

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <StyledHeader />
      <StyledMain>{children}</StyledMain>
      <StyledBottomNavigation />
    </div>
  );
};

const StyledLayout = styled(Layout)(() => ({
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateAreas: `
    'header'
    'main'
    'footer'
  `,
}));

export default StyledLayout;
