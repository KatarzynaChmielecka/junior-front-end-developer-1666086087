import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import BusinessTasksList from '../components/business-context/BusinessTasksList';
import avatar from '../assets/avatar-message.png';
import classes from './TaskTabContent.module.css';
import mockData from '../mockData';

const TaskTabContent = () => {
  const { taskId } = useParams();
  const filtered = mockData.filter((index) => index.id == taskId);
  const [clickedIndex, setClickedIndex] = useState(false);

  const clicked = (index) => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  const diffDate = (index) => {
    return Math.ceil(
      (new Date() - new Date(index.created_at)) / (1000 * 3600 * 24),
    );
  };

  const day = (index) =>
    new Date(index.created_at).toLocaleDateString('en', {
      day: 'numeric',
    });

  const month = (index) =>
    new Date(index.created_at).toLocaleDateString('en', {
      month: 'long',
    });
  return (
    <>
      <Tabs
        defaultIndex={1}
        className={classes['business-context-tabs-wrapper']}
      >
        <TabList className={classes['tab-list']}>
          {filtered[0].businessContext.map((index, item) => (
            <Tab
              key={index.id}
              onClick={() => clicked(item)}
              className={
                clickedIndex[item]
                  ? `${classes.read} ${classes['message-tab']}`
                  : `${classes.notRead} ${classes['message-tab']}`
              }
            >
              <BusinessTasksList
                clickedIndex={clickedIndex[item]}
                author={index.author}
                created_at={index.created_at}
                title={index.title}
                content={index.content}
              />
            </Tab>
          ))}
        </TabList>
        {filtered[0].businessContext.map((index) => (
          <TabPanel key={index.id}>
            <div className={classes['tab-panel-wrapper']}>
              <p className={classes['tab-panel-wrapper__title']}>
                {index.title}
              </p>

              <div className={classes['tab-panel__content-wrapper']}>
                <img src={avatar} alt="author" />
                <div>
                  <div className={classes['tab-panel__content']}>
                    <p className={classes['tab-panel__content-author']}>
                      {index.author}
                    </p>
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
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default TaskTabContent;
