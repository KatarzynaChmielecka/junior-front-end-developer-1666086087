import { Link } from 'react-router-dom';

import classes from './TasksList.module.css';

const TasksList = ({ srcImage, href, title, alt }) => {
  return (
    <div className={classes['tasks-list-wrapper']}>
      <img src={srcImage} alt={alt} />
      <Link to={`${href}`} className={classes['tasks-list-wrapper__task-name']}>
        {title}
      </Link>
    </div>
  );
};

export default TasksList;
