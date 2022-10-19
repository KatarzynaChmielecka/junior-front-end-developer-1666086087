import './App.css';

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TaskTabContent from './pages/TaskTabContent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/:taskId" element={<TaskTabContent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
