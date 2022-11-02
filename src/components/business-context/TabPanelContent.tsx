import avatar from '../../assets/avatar-message.png';
import classes from './TabPanelContent.module.css';

const TabPanelContent = ({
  title,
  author,
  index,
}: {
  title: string;
  author: string;
  index: {
    content: string;
    created_at: string;
  };
}) => {
  const diffDate = (index: { created_at: string }) => {
    return Math.ceil(
      (+new Date() - +new Date(index.created_at)) / (1000 * 3600 * 24),
    );
  };

  const day = (index: { created_at: string }) =>
    new Date(index.created_at).toLocaleDateString('en', {
      day: 'numeric',
    });

  const month = (index: { created_at: string }) =>
    new Date(index.created_at).toLocaleDateString('en', {
      month: 'long',
    });
  return (
    <div className={classes['tab-panel-wrapper']}>
      <p className={classes['tab-panel-wrapper__title']}>{title}</p>

      <div className={classes['tab-panel__content-wrapper']}>
        <img src={avatar} alt="author" />
        <div>
          <div className={classes['tab-panel__content']}>
            <p className={classes['tab-panel__content-author']}>{author}</p>
            <span className={classes['tab-panel__content-separator']}>
              &#183;
            </span>
            <p className={classes['tab-panel__content-diff-date']}>
              {diffDate(index)} day(s) ago,
            </p>
            <p className={classes['tab-panel__content-date']}>
              <span>{day(index)}</span>
              <span>{month(index)}</span>
            </p>
            <span className={classes['tab-panel__content-separator']}>
              &#183;
            </span>
            <p className={classes['tab-panel__content-hours']}>
              {new Date(index.created_at).getHours()}:
              {new Date(index.created_at).getMinutes()}
            </p>
          </div>
          <p className={classes['tab-panel__content-message']}>
            {index.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabPanelContent;
