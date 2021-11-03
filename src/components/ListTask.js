import React from 'react'
import Task from './Task'
import { useSelector,useDispatch } from 'react-redux';

export const ListTask = () => {

    const tab=useSelector(state => state.map(el=> el))
    const dispatch = useDispatch()
    return (
        <div  style={{display:"flex",flexDirection:"row",flexWrap:" wrap"}}>
            {tab.map((el,i)=> <Task task={el} key={i}></Task>)}
        </div>
    )
}
