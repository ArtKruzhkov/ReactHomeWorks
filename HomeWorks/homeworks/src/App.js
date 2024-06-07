import './App.css';
import Message from './components/Message/Message'
import CommentsList from './components/HomeWork2/CommentsList';
import TempConverter from './components/HomeWork3/TempConverter/TempConverter';
import ToDoList from './components/HomeWork3/ToDoList/ToDoList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomeWork4/HomePage/HomePage';
import AboutPage from './components/HomeWork4/AboutPage/AboutPage';
import ArticlesList from './components/HomeWork4/ArticlesList/ArticlesList';
import ArticleDetails from './components/HomeWork4/ArticleDetails/ArticleDetails';
import { Provider } from 'react-redux';
import store from './components/HomeWork5/Redux/store';
import ThemeSwitch from './components/HomeWork5/Redux/ThemeSwitch';
import productsStore from './components/HomeWork6/store/productsStore';
import AddProduct from './components/HomeWork6/components/AddProduct/AddProduct';
import ProductsList from './components/HomeWork6/components/ProductsList/ProductsList';
import TasksList from './components/HomeWork7/components/TasksList';

function App() {
  const articlesHW4 = [
    { id: 1, title: 'Article 1', content: 'This is a text for the article 1' },
    { id: 2, title: 'Article 2', content: 'This is a text for the article 2' },
    { id: 3, title: 'Article 3', content: 'This is a text for the article 3' },
    { id: 4, title: 'Article 4', content: 'This is a text for the article 4' },
    { id: 5, title: 'Article 5', content: 'This is a text for the article 5' },
  ];
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
      <div className='HomeWork-4'>
        <h2>HomeWork-4</h2>
        <Router>
          <div className='router-wrap'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/articles' element={<ArticlesList articles={articlesHW4} />} />
              <Route path='/articles/:id' element={<ArticleDetails articles={articlesHW4} />} />
            </Routes>
          </div>
        </Router>
      </div>
      <div className='HomeWork-5'>
        <h2>HomeWork-5</h2>
        <Provider store={store}>
          <ThemeSwitch />
        </Provider>
      </div>
      <div className='HomeWork-6'>
        <h2>HomeWork-6</h2>
        <Provider store={productsStore}>
          <AddProduct />
          <ProductsList />
        </Provider>
      </div>
      <div className='HomeWork-7'>
        <h2>HomeWork-7</h2>
        <TasksList />
      </div>
    </div>
  );
}

export default App;
