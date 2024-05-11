import React, {useEffect, useState}from 'react'
import WeekTodos from './WeekTodos'
import WeekForm from './WeekForm'
import axios from 'axios'


const Week = () => {

  const [weekTodos, setWeekTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/week/get')
    .then(result => setWeekTodos(result.data))
    .catch(err => console.log(err))
  }, [])

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/api/week/delete/${id}`)
    .then(result => {
        // Assuming result.data contains the newly added task
        setWeekTodos(prevTodos => prevTodos.filter(todo => todo._id!== id)); // Update state with the new task
    })
}


  return (
    <div className='grid grid-rows-8 gap-4'>
        <div className='row-start-1 row-end-8  bg-C778DA9 rounded p-4 '>
                <WeekTodos 
                weekdata={weekTodos}
                weekdeleteC={(id) => deleteTodo(id)}/>
            </div>
            <div className='row-start-8 row-end-9'>
              <WeekForm weekTodos={weekTodos} setWeekTodos={setWeekTodos} />
            </div>
        
</div>
  )
}

export default Week