import React from 'react'
import { useState } from 'react';
import './Task.css';
import { useSelector,useDispatch } from 'react-redux';
import { supprime } from '../Actions/action';


 const Task = ({task}) => {
   /**  const y=useSelector(state => state.map(el=>el.des))*/
    const dispatch = useDispatch()
     const [done, setDone] = useState(false)
    return (  
        <section >
            <h3>Task <span>{task.id}</span>:</h3>
            <div className="task">
            <h2>{task.des}</h2>
            <div className="icon">
            {done ? <img src="https://cdn-icons-png.flaticon.com/512/3388/3388617.png" onClick={()=> setDone(!done)}></img>: <img src="https://cdn-icons-png.flaticon.com/512/512/512070.png" onClick={()=>setDone(!done)}></img>} 
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/White_x_in_red_rounded_square.svg/768px-White_x_in_red_rounded_square.svg.png" onClick={()=>dispatch(supprime(task.id))} ></img>
            </div>
            </div>
        </section>
    )
}
export default Task
