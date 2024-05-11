import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";


const Todos = ({tomorrowdata, tomorrowdeleteC}) => {

    

  return (
   <div >
    <ul>
        {
            tomorrowdata.map(todo => (
                 <li className='rounded bg-blue-200 h-16 p-5 text-lg mb-2'>
                    <div className='grid grid-cols-10'>
                        <div >
                             <button type='submit'
                    onClick={(e)=> tomorrowdeleteC(todo._id)}> <FaRegCheckCircle
                    onMouseOver={(e) => e.currentTarget.style.color = 'black'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                /></button> 
                        </div>
                    <div className='col-start-2 col-end-10'>
                         {todo.tomorrowTask}   
                    </div>

                    </div>
                    </li>
            ))
        }
    </ul>
   </div>
  )
}

export default Todos