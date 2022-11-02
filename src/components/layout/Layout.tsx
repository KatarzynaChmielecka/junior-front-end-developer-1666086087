import { Outlet } from 'react-router-dom';

import Footer from './Footer.tsx';
import Navbar from './Navbar.tsx';
import classes from './Layout.module.css';

const Layout = () => {
  return (
    <div className={classes.layout}>
      <Navbar />
      <main className={classes['layout__main-content']}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
