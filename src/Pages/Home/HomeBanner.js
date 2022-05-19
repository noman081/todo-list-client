import React from 'react';
import todo from '../../assets/images/todo.jpg';
const HomeBanner = () => {
    return (
        <div className='d-lg-flex justify-content-center'>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h2>Welcome to your fun todo</h2>
                    <p>One of the most important reasons you should use a to do list is that it will help you stay organised. When you write all your tasks in a list, they seem more manageable. When you've got a clear outline of the tasks you've got to do and those you've completed, it helps you stay focused.</p>
                </div>
            </div>
            <div className='ms-lg-5'>
                <img src={todo} alt="" />
            </div>
        </div>
    );
};

export default HomeBanner;