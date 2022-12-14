import { Link } from 'react-router-dom';

import classes from './TasksList.module.css';
import { TasksListInterface } from '../../interfaces/interfaces';

const TasksList = ({
  srcImage,
  href,
  title,
  alt,
  status,
}: TasksListInterface) => {
  return (
    <div
      className={classes['tasks-list-wrapper']}
      style={{ color: status === 'blocked' ? '#aeb5c1' : '' }}
    >
      <img src={srcImage} alt={alt} />
      <Link
        to={`${href}`}
        className={classes['tasks-list-wrapper__task-name']}
        style={{
          fontWeight: status === 'active' ? 600 : 500,
          color: status === 'blocked' ? '#aeb5c1' : '',
          pointerEvents: status === 'blocked' ? 'none' : 'auto',
        }}
      >
        {title}
      </Link>
    </div>
  );
};

export default TasksList;
