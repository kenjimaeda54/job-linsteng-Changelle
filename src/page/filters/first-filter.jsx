import React,{useState,useMemo} from 'react';
import { useLocation, } from 'react-router';
import { Link } from 'react-router-dom';
import {data} from '../../data';
import { useEffect } from 'react';
import {RuleData,Timer} from '../../util'
import done from '../../assets/img/done.svg';
import '../../assets/css/filter.css';




const FilterFister =() => {
 const [filters,setFilters] = useState([])
 const visible = Timer(); 
 const [changeStyle,setChangeStyle] = useState(false)
 const{role,level,languages,tools} = RuleData()
 const location = useLocation();
 const {filter} = location.state;
 
 useEffect(()=>{
   if(filters.length <=2  && visible ){
      setChangeStyle(true)
   }

 },[visible,filters])


   
 const paramsFilter = useMemo(()=>{
  const filtersData =   {
    // eslint-disable-next-line array-callback-return
    languages: data.filter(value=>{if(value.languages.includes(filter)) return value}),
    // eslint-disable-next-line array-callback-return
    tools: data.filter(value=>{if(value.tools.includes(filter)) return value }),
    role:  data.filter(value=> value.role === filter ),
    level: data.filter(value=>value.level === filter),
  }
  return filtersData;

 },[filter])
  
 useEffect(()=>{
   if(role.includes(filter)) return setFilters(paramsFilter.role); 
   if(level.includes(filter)) return setFilters(paramsFilter.level);
   if(languages.includes(filter)) return setFilters(paramsFilter.languages);
   if(tools.includes(filter)) return setFilters(paramsFilter.tools);
  },[paramsFilter,role,filter,languages,level,tools])
   
    
   return(
      <div className="container">
      <div className="filters" > 
          <li className="filters-all"  >
             <h3>{filter}</h3>
             <Link  to={'/'}>
               <img className="done"  type="image"  src={done} alt="done" />
             </Link>
          </li> 
          <small>{changeStyle && 'Sua lista possui 3 ou menos itens,para filtra novamente precisa limpar a lista' }</small>
          <Link className="clear" to={'/'}  > Limpar </Link>  
       </div> 
         {filters.map((item) => (
        <div key={item.id} className="main">
          <img src={item.logo} alt="company" />
          <div className="main-itens">
            <h3>{item.company}</h3>
            {item.new ? <span> new </span> : ''}
            {item.featured ? (
              <span style={{ backgroundColor: 'black' }}> featured </span>
            ) : (
              ''
            )}
          </div>
          <div className="main-position">
            <h3>{item.position}</h3>
          </div>
          <div className="main-end">
            <p>
              {item.postedAt} {item.contract}
              {item.location}
            </p>
          </div>
          <div className="language">
            {item.role === '' ? (
              ''
            ) : (
              <Link className={changeStyle? 'tool hidden' : 'tool' }  
              to={{
                pathname: '/role',
                state: {filter:item.role}
              }}>
              {item.role}   
              </Link> 
            )}
            {item.level === '' ? (
              ''
            ) : (
              <Link
              className={changeStyle? 'tool hidden' : 'tool' }
                to={{  pathname: '/filter/second',
                       state: {filter: filters,
                               level: item.level,
                               role: item.role,
                               }}}
              >
                {item.level}

              </Link>
            )}
            {item.tools.length === 0
              ? '' //{value} porque estamos em uma renderização condicional
              : // não consigo pegar direto
                item.tools.map((value,index) => (  
                  <Link
                    key={index}
                    className={changeStyle? 'tool hidden' : 'tool' }
                    to={{
                      pathname: '/role',
                      state: { filter: value },
                    }}
                  >
                    {value}
                  </Link>
                ))}
            {item.languages.map((languages,index) => (
              <Link
                key={index}
                className={changeStyle? 'tool hidden' : 'tool' }
                to={{
                  pathname: '/role',
                  state: { filter: languages },
                }}
              >
                {languages} 
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
   ); 

}

export default FilterFister;