
import './css/App.css';
import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos'

function App() {
  return (
    <div className="App">
      <h1 style={{  margin: '10px' }}>To Do List</h1>
      <Todos/>
      <DisplayTodos />
    </div>
  );
}

export default App;
