import { Outlet } from 'react-router-dom';

import Navbar from './Navbar.jsx';
import classes from './Layout.module.css';

const Layout = () => {
  return (
    <div className={classes.layout}>
      <Navbar />
      <main className={classes['layout__main-content']}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
