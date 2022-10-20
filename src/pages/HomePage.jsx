import { Outlet } from 'react-router-dom';

import TasksList from '../components/tasks/TasksList';
import active from '../assets/active.png';
import blocked from '../assets/blocked.png';
import completed from '../assets/completed.png';
import mockData from '../mockData';

// import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <aside>
        <nav>
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
      <Outlet />
    </div>
  );
};

export default HomePage;
