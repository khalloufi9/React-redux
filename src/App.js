import logo from './logo.svg';
import './App.css';
import Add from  './components/Add';
import Filter from './components/Filter'
import { ListTask } from './components/ListTask';
function App() {
  return (
    <div className="App">
    <Filter/>
    <ListTask/>
    <Add />
    </div>
  );
}

export default App;
