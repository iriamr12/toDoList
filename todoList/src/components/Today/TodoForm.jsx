// todoForm.jsx
import React, { useState } from 'react';
import axios from 'axios';


const TodoForm = ({todos, setTodos}) => {

    const [task, setTask] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/day', { task: task })
            .then(result => {
                // Assuming result.data contains the newly added task
                setTodos(prevTodos => [...prevTodos, result.data]); // Update state with the new task
                setTask(''); // Clear input field after adding task
            })
            .catch(err => console.log(err));
    }

    return (
        <div >
            <form onSubmit={onSubmit}>
                 <input 
                    type='text'
                    placeholder="What's next ?"
                    value={task}
                    onChange={handleChange} // Pass handleChange directly
                    className='rounded w-full h-20 bg-C1B263B p-4 text-white text-lg'
                />
            </form>
               

        </div>    
    );
}

export default TodoForm;
