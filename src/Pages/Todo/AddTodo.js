import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddTodo = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />
    }
    const email = user.email;
    const onSubmit = data => {
        const task = {
            email: email,
            isComplete: false,
            taskName: data.taskName,
            description: data.description
        }
        fetch('https://todo-noman.herokuapp.com/todo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then(res => res.json())
            .then(result => {
                toast.success('Task added successfully');
                reset();
            })
    };
    return (
        <div className='container'>
            <h1>Add a Task</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <label htmlFor="exampleInputEmail1" className="form-label">Task Name</label>
                        <input className="form-control w-50" {...register("taskName", { required: true })} />
                        {errors.taskName?.type === 'required' && <span className='text-danger'>Task name is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="exampleInputEmail1" className="form-label">Task Description</label>
                        <textarea className="form-control w-50" {...register("description", { required: true })} />
                        {errors.description && <span className='text-danger'>Task description is required</span>}
                    </div>
                    <input type="submit" value='Add Task' className='btn btn-outline-dark' />
                </form>
            </div>
        </div>
    );
};

export default AddTodo;