import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { filtre } from '../Actions/action';

const Filter = () => {
    const dispatch = useDispatch()
    return (
           
            <div  style={{display:"flex",flexDirection:"row"}}>
                
            <button style={{margin:"10px",backgroundColor:"green",width:"250px"}} onClick={()=>dispatch(filtre(true))} >Filter by Done Task</button>
            <button style={{margin:"10px",backgroundColor:"red",width:"250px"}} onClick={()=>dispatch(filtre(false))}>Filter by  Not Done Task</button>         
        
            </div>
          
        
    )
}

export default Filter