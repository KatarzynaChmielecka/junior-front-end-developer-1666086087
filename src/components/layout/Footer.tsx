import { Link } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <nav>
        <Link to="#" className={classes['footer__link']}>
          Terms of service
        </Link>
        <span className={classes['footer__separator']}>&#183;</span>
        <Link to="#" className={classes['footer__link']}>
          Privacy policy
        </Link>
        <span className={classes['footer__separator']}>&#183;</span>
        <Link to="#" className={classes['footer__link']}>
          Copyright
        </Link>
      </nav>
      <div className={classes['footer__data']}>
        <p>nerds.family Version 1.2</p>
        <span className={classes['footer__separator']}>&#183;</span>
        <p>Last update 10/09/2022</p>
      </div>
    </footer>
  );
};

export default Footer;
