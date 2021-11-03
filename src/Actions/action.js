import  SUBMIT   from "../constants/actiontype"
import React from 'react'

export const enregiste=(val1,key)=>{
    return{
        type: "SUBMIT",
        val1,key
        
    }
}

export const supprime = (key) => {
    return {
        type: "DELETE",
        payload:key
       
    }
}
    export const filtre = (Isdone) => {
        return {
            type: "FILTRE",
            payload:Isdone
           
        }
 
};
