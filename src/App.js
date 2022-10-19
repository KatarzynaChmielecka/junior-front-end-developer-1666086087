import Navbar from './components/layout/Navbar';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <Navbar />
      <main>main content</main>
    </div>
  );
}

export default App;
