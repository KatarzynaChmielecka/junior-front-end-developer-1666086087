import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';
import TaskTabContent from './pages/TaskTabContent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}>
            <Route path="/:taskId" element={<TaskTabContent />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
