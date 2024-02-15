import logo from './logo.svg';
import './App.css';
import AddActivity from './AddActivity';
import Activity from './Activity';

function App({ handleAddActivity }) {
  return (
    <div className="App">
      <div className='activities'>
        <Activity />
      </div>
    </div>
  );
}

export default App;

