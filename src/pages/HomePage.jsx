import { Outlet } from 'react-router-dom';

import TasksList from '../components/tasks/TasksList';
import active from '../assets/active.png';
import blocked from '../assets/blocked.png';
import classes from './HomePage.module.css';
import compass from '../assets/compass.png';
import completed from '../assets/completed.png';
import mockData from '../mockData';

const HomePage = () => {
  return (
    <>
      <aside className={classes['aside-wrapper']}>
        <p className={classes['aside-wrapper__title']}>YOUR TASKS</p>
        <nav className={classes['aside-wrapper__nav']}>
          {mockData.map((index) => (
            <TasksList
              srcImage={
                (index.status === 'active' && active) ||
                (index.status === 'blocked' && blocked) ||
                (index.status === 'completed' && completed)
              }
              alt={index.status}
              href={index.status !== 'blocked' ? index.id : ''}
              title={index.title}
              key={index.id}
            />
          ))}
        </nav>
      </aside>
      <section className={classes['main-section-wrapper']}>
        <div className={classes['main-section-wrapper__header']}>
          <span className={classes['main-section-wrapper__title']}>
            <img src={compass} alt="" />
            <p>BUSINESS CONTEXT</p>
          </span>
        </div>
        <Outlet />
      </section>
    </>
  );
};

export default HomePage;
