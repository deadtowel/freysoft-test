interface BottomNavigationProps {
  className?: string;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ className }) => {
  return <div className={className}>BottomNavigation</div>;
};

export default BottomNavigation;
