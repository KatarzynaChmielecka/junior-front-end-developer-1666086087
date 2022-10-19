import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TaskTabContent from './pages/TaskTabContent';

// import Navbar from './components/layout/Navbar';

// import classes from './App.module.css';

function App() {
  return (
    // <div className={classes.app}>
    //   <Navbar />
    //   <main>main content</main>
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
