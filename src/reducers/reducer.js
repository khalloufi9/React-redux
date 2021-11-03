import React, { useState} from 'react';
import { action, supprime } from '../Actions/action';

import SUBMIT  from '../constants/actiontype'


const initialstate=[{id:1,des:"Go to Work",done:true},{id:2,des:"Learn React JS",done:false},{id:3,des:"Learn Redux",done:true},{id:4,des:"Go To Sleep",done:false}];
const x=0;
export const reducer = (state=initialstate,action) => {
/*
 if (action.type==="SUBMIT")
 {   
     return state=[...state,{des:action.val1,id:Math.round(Math.random()*(10-0+1)+0),done:false}]  
 }
 else 
 {
     return state;
 }*/

 switch (action.type) {
    case "SUBMIT":
        return state=[...state,{des:action.val1,id:action.key,done:false}];

    case "DELETE":
        return state=state.filter((el,i)=> el.id!==action.payload)
    
        case "FILTRE":
            return state=state.filter((el,i)=> el.done==action.payload)
    default:
        return state;
}
}
export default reducer