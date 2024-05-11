import React, {useEffect, useState}from 'react'
import SideBar from '../SideBar'
import TomorrowTodos from './TomorrowTodos'
import TomorrowForm from './TomorrowForm'
import axios from 'axios'


const ForTomorrow = () => {

  const [tomorrowTodos, setTomorrowTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/forTomorrow/get')
    .then(result => setTomorrowTodos(result.data))
    .catch(err => console.log(err))
  }, [])

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/api/forTomorrow/delete/${id}`)
    .then(result => {
        // Assuming result.data contains the newly added task
        setTomorrowTodos(prevTodos => prevTodos.filter(todo => todo._id!== id)); // Update state with the new task
    })
}


  return (
    <div className='grid grid-rows-8 gap-4'>
        <div className='row-start-1 row-end-8  bg-C778DA9 rounded p-4 '>
                <TomorrowTodos 
                tomorrowdata={tomorrowTodos}
                tomorrowdeleteC={(id) => deleteTodo(id)}/>
            </div>
            <div className='row-start-8 row-end-9'>
              <TomorrowForm tomorrowTodos={tomorrowTodos} setTomorrowTodos={setTomorrowTodos} />
            </div>
        
</div>
  )
}

export default ForTomorrow