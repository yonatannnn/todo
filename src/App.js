import logo from './logo.svg';
import './App.css';
import AddActivity from './AddActivity';
import Activity from './Activity';

function App() {
  return (
    <div className="App">
        <AddActivity />
        <div>
        <Activity title="title" description="description" completed="completed" />
        </div>
    </div>
  );
}

export default App;
