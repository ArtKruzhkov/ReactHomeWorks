import './App.css';
import Message from './components/Message/Message'
import CommentsList from './components/HomeWork2/CommentsList';

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
        <CommentsList />
      </div>
    </div>
  );
}

export default App;
