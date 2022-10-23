import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import BusinessTasksList from '../components/business-context/BusinessTasksList';
import TabPanelContent from '../components/business-context/TabPanelContent';
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
            <TabPanelContent
              title={index.title}
              author={index.author}
              index={index}
            />
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default TaskTabContent;
