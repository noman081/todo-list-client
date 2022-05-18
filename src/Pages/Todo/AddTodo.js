import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddTodo = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const task = {
            taskName: data.taskName,
            description: data.description
        }
        fetch('http://localhost:5000/todo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Task added successfully');
                reset();
            })
        console.log(data);
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