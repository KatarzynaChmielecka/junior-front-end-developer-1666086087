import { useParams } from 'react-router-dom';

const TaskTabContent = () => {
  const params = useParams();
  return <div>{params.taskId}</div>;
};

export default TaskTabContent;
