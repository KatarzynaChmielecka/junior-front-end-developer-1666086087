import { NavLink, Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <nav>
        <NavLink to="5">5</NavLink>
        <NavLink to="6">6</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HomePage;
