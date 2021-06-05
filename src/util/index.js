import {useMemo,useState} from 'react';
import { useTimeout } from 'beautiful-react-hooks'; 

export  const  RuleData = () => {
     const paramsMemo =  useMemo(()=>{
          const paramsFilter = {
            role:['Fullstack','Backend','Frontend'],  
            level: ['Junior','Midweight','Senior'],
            languages: ['HTML', 'CSS', 'JavaScript','Ruby','Python'],
            tools: ['React','Sass','Ruby','RoR','Vue','Django',]
         }
         return paramsFilter;
        
         },[]) 
     return paramsMemo;                     
   
}


export const Timer = () =>{
  const[visible,setVisible] = useState(false) 
     
     useTimeout(()=>{
         setVisible(true)
     }, 100)
  return visible;

};
