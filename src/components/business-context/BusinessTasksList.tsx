import classes from './BusinessTasksList.module.css';
import { BusinessTasksListInterface } from '../../interfaces/interfaces';

const BusinessTasksList = ({
  clickedIndex,
  author,
  created_at,
  title,
  content,
}: BusinessTasksListInterface) => {
  return (
    <>
      <div className={classes.header}>
        {!clickedIndex && <span className={classes.span}>NEW</span>}
        <p>{author}</p>
        <span>&#183;</span>
        <p>
          {new Date(created_at).toLocaleDateString('en', {
            month: 'short',
            day: 'numeric',
          })}
        </p>
      </div>
      <p
        className={
          !clickedIndex
            ? `${classes['business-context-title-short']} ${classes.notRead}`
            : `${classes['business-context-title-short']}`
        }
      >
        {title}
      </p>

      <p className={classes['business-context-content-short']}>{content}</p>
    </>
  );
};

export default BusinessTasksList;
