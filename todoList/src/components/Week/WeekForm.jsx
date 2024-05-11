// todoForm.jsx
import React, { useState } from 'react';
import axios from 'axios';


const WeekForm = ({weekTodos, setWeekTodos}) => {

    const [weekTask, setWeekTask] = useState([]);

    const handleChange = (e) => {
        setWeekTask(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/week', { weekTask: weekTask })
            .then(result => {
                // Assuming result.data contains the newly added weekTask
                setWeekTodos([...weekTodos, result.data]); // Update state with the new weekTask
                setWeekTask(''); // Clear input field after adding weekTask
            })
            .catch(err => console.log(err));
    }

    return (
        <div >
            <form onSubmit={onSubmit}>
                 <input 
                    type='text'
                    placeholder="What's next ?"
                    value={weekTask}
                    onChange={handleChange} // Pass handleChange directly
                    className='rounded w-full h-20 bg-C1B263B p-4 text-white text-lg'
                />
            </form>
               

        </div>    
    );
}

export default WeekForm;
