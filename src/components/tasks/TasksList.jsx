import { Link } from 'react-router-dom';

import classes from './TasksList.module.css';

const TasksList = ({ srcImage, href, title, alt, status }) => {
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
          color: status === 'blocked' && '#aeb5c1',
          pointerEvents: status === 'blocked' && 'none',
        }}
      >
        {title}
      </Link>
    </div>
  );
};

export default TasksList;
