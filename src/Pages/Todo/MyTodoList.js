import React from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyTodoRow from './MyTodoRow';

const MyTodoList = () => {
    const [user, loading] = useAuthState(auth);
    const email = user.email;
    const { isLoading, error, data: todos, refetch } = useQuery('todoList', () => fetch(`https://todo-noman.herokuapp.com/todo/${email}`).then(res => res.json()));
    if (isLoading || loading) {
        return <Loading />
    }

    return (
        <div className='text-center container'>
            <h1>This is my todo List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">State</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) => <MyTodoRow
                            key={todo._id}
                            todo={todo}
                            refetch={refetch}
                            index={index}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyTodoList;