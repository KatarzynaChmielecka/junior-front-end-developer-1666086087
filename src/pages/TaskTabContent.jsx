import { useParams } from 'react-router-dom';

import mockData from '../mockData';

const TaskTabContent = () => {
  const { taskId } = useParams();

  const filtered = mockData.filter((index) => index.id == taskId);

  return (
    <div>
      {filtered[0].businessContext.map((index) => (
        <p key={index.id}>{index.author}</p>
      ))}
    </div>
  );
};

export default TaskTabContent;
