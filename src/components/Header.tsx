interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return <header className={className}>Header</header>;
};

export default Header;
