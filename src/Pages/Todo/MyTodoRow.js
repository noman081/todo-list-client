import React from 'react';
import { toast } from 'react-toastify';

const MyTodoRow = ({ todo, refetch, index }) => {
    const { _id, taskName, description, isComplete } = todo;
    const url = `https://todo-noman.herokuapp.com/todo/${_id}`;

    const handleComplete = () => {
        const isComplete = true;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ isComplete })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    toast.success('Task completed successfully');
                }
            })
    }
    const handleDelete = () => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    toast.success('Task deleted!');
                    refetch();
                })
        }
    }
    return (
        <tr>
            <th scope="row" className={isComplete ? 'text-decoration-line-through' : ''}>{index + 1}</th>
            <td className={isComplete ? 'text-decoration-line-through' : ''}>{taskName}</td>
            <td className={isComplete ? 'text-decoration-line-through' : ''}>{description}</td>
            <td>
                <button type="button" disabled={isComplete} className="btn btn-success btn-sm" onClick={handleComplete}>Complete</button>
            </td>
            <td>
                <button onClick={handleDelete} type="button" className="btn btn-danger btn-sm">Delete</button>
            </td>
        </tr>
    );
};

export default MyTodoRow;