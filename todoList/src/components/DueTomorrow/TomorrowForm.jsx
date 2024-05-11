// todoForm.jsx
import React, { useState } from 'react';
import axios from 'axios';


const TodoForm = ({tomorrowtodos, setTomorrowTodos}) => {

    const [tomorrowTask, setTomorrowTask] = useState([]);

    const handleChange = (e) => {
        setTomorrowTask(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/forTomorrow', { tomorrowTask: tomorrowTask })
            .then(result => {
                // Assuming result.data contains the newly added tomorrowTask
                setTomorrowTodos(prevTodos => [...prevTodos, result.data]); // Update state with the new tomorrowTask
                setTomorrowTask(''); // Clear input field after adding tomorrowTask
            })
            .catch(err => console.log(err));
    }

    return (
        <div >
            <form onSubmit={onSubmit}>
                 <input 
                    type='text'
                    placeholder="What's next ?"
                    value={tomorrowTask}
                    onChange={handleChange} // Pass handleChange directly
                    className='rounded w-full h-20 bg-C1B263B p-4 text-white text-lg'
                />
            </form>
               

        </div>    
    );
}

export default TodoForm;
