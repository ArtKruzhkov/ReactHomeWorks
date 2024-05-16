import './App.css';
import Message from './components/Message/Message'
import CommentsList from './components/HomeWork2/CommentsList';
import TempConverter from './components/HomeWork3/TempConverter/TempConverter';
import ToDoList from './components/HomeWork3/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='main-title'>My React Home Works.</h1>
        <div className='HomeWork-1'>
          <Message text='Text example.' />
        </div>
      </header>
      <div className='HomeWork-2'>
        <h2>HomeWork-2</h2>
        <CommentsList />
      </div>
      <div className='HomeWork-3'>
        <h2>HomeWork-3</h2>
        <div className='temp-converter-main'>
          <h4>Temperature converter</h4>
          <TempConverter />
        </div>
        <div className='ToDoList-main'>
          <h4>To Do List</h4>
          <ToDoList />
        </div>
      </div>
    </div>
  );
}

export default App;
