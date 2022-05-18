import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';
import AddTodo from './Pages/Todo/AddTodo';
import MyTodoList from './Pages/Todo/MyTodoList';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addTodo' element={
          <RequireAuth>
            <AddTodo />
          </RequireAuth>}>
        </Route>
        <Route path='/mytodo' element={
          <RequireAuth>
            <MyTodoList />
          </RequireAuth>
        }>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
