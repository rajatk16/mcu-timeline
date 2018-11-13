import AppBar from 'material-ui/AppBar';

const Header = ({ title = 'Marvel Cinematic Universe Timeline'}) =>
    <AppBar title={title} showMenuIconButton={false} />

export default Header;