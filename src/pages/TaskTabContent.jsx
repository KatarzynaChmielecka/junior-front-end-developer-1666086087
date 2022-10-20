import { useParams } from 'react-router-dom';
import { useState } from 'react';

import classes from './TaskTabContent.module.css';
import mockData from '../mockData';

const TaskTabContent = () => {
  const { taskId } = useParams();
  const [read, setRead] = useState(false);
  const filtered = mockData.filter((index) => index.id == taskId);

  const clicked = () => {
    setRead(true);
  };

  return (
    <div className={classes['business-context-tabs-wrapper']}>
      {filtered[0].businessContext.map((index) => (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={clicked}
          key={index.id}
          onClick={clicked}
          className={
            read
              ? `${classes.read} ${classes['message-tab']}`
              : `${classes.notRead} ${classes['message-tab']}`
          }
        >
          <div className={classes.header}>
            {!read && <span className={classes.span}>NEW</span>}
            <p>{index.author}</p>
            <span>&#183;</span>
            <p>
              {new Date(index.created_at).toLocaleDateString('en', {
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
          <p className={classes['business-context-title-short']}>
            {index.title}
          </p>

          <p className={classes['business-context-content-short']}>
            {index.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TaskTabContent;
