import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';
import AddTodo from './Pages/Todo/AddTodo';
import MyTodoList from './Pages/Todo/MyTodoList';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addTodo' element={<AddTodo />}></Route>
        <Route path='/mytodo' element={<MyTodoList />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
