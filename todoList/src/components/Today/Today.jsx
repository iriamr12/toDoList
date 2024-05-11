import React, {useEffect, useState}from 'react'
import Todos from './Todos'
import TodoForm from './TodoForm'
import axios from 'axios'


const Today = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/day/get')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
  }, [])

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/api/day/delete/${id}`)
    .then(result => {
        // Assuming result.data contains the newly added task
        setTodos(prevTodos => prevTodos.filter(todo => todo._id!== id)); // Update state with the new task
    })
}


  return (
    <div className='grid grid-rows-8 gap-4'>
        <div className='row-start-1 row-end-8  bg-C778DA9 rounded p-4 '>
                <Todos 
                data={todos}
                deleteC={(id) => deleteTodo(id)}/>
            </div>
            <div className='row-start-8 row-end-9'>
              <TodoForm todos={todos} setTodos={setTodos} />
            </div>
        
</div>
  )
}

export default Today