import React from 'react'
import { useState } from 'react';
import './Add.css'
import { useSelector,useDispatch } from 'react-redux';
import { enregiste } from '../Actions/action';

const Login = () => {
    const [val1, setval1] = useState("");
    const [id, setid] = useState(0);
    const y=useSelector(state => state.map(el=>el.des))
    const dispatch = useDispatch()
    console.log(id)
    return (
        <section className="form">
            <div>
            <input type="text" placeholder="Enter new Todo" value={val1} onChange={(e)=>setval1(e.target.value)}/>
            </div>
            <div>
            <button onClick={()=>dispatch(enregiste(val1,Math.round(Math.random()*(10-0+1)+0)))}  >Add </button>
            </div>
           
        </section>
    )
}

export default Login