import {useState,useMemo} from 'react';
import { useTimeout } from 'beautiful-react-hooks'; 


export const Timer = () =>{
  const[visible,setVisible] = useState(false) 
     
     useTimeout(()=>{
         setVisible(true)
     }, 100)
  return visible;

};

export const ParamsFilter = (list, paramsJob) =>{
   const listFilter ={
    // eslint-disable-next-line array-callback-return
    languages: list.filter(value=>{if(value.languages.includes(paramsJob)) return value}),
    // eslint-disable-next-line array-callback-return
    tools: list.filter(value=>{if(value.tools.includes(paramsJob)) return value }),
    role:  list.filter(value=> value.role === paramsJob ),
    level: list.filter(value=>value.level === paramsJob),
    }
    if(listFilter.role.length !== 0 ) return listFilter.role
    if(listFilter.level.length !== 0 ) return listFilter.level
    if(listFilter.languages.length !== 0 ) return listFilter.languages
    if(listFilter.tools.length !== 0 ) return listFilter.tools

}

//useMeMo e useCallback não podem estar no topo da aplicação ou seja,
//precisam esta dentro de um espoco de uma função pai para funcionar  
export const FiltersStyleButton = (firstJobFilter) =>{
  const [changeButtonRole,setChangeButtonRole] = useState(false)
  const [changeButtonLevel,setChangeButtonLevel] = useState(false)
  const [changeButtonTools,setChangeButtonTools] = useState(false)
  const  [changeButtonLanguages,setChangeButtonLanguages] = useState(false) 
  
  const filterButtonState = useMemo (() =>{
    const filterJobParams = {
    roleButton: ['Frontend','Backend','Fullstack'],
    levelButton: ['Midweight','Junior','Senior'],
    toolsButton : ['React','Sass','Ruby','RoR','Vue','Django'],
    languagesButton: ['CSS','HTML','JavaScript','Python']
    }
    return filterJobParams;
  },[] )    

   useMemo(() => {
    if(filterButtonState.roleButton.includes(firstJobFilter))  return setChangeButtonRole(true);
    if(filterButtonState.levelButton.includes(firstJobFilter)) return setChangeButtonLevel(true);
    if(filterButtonState.languagesButton.includes(firstJobFilter)) return setChangeButtonLanguages(true);
    if(filterButtonState.toolsButton.includes(firstJobFilter)) return setChangeButtonTools(true)
  },[filterButtonState,firstJobFilter] )

  return {
    changeButtonRole,
    changeButtonLevel,
    changeButtonTools,
    changeButtonLanguages,
  }
    
} 
 


