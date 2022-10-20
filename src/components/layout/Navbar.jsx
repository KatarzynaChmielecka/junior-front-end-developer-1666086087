import classes from './Navbar.module.css';
import logo from '../../assets/logo.png';
import user from '../../assets/avatar-user.png';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <img src={logo} alt="logo nerds.family" />
      <img src={user} alt="user" />
    </nav>
  );
};

export default Navbar;
