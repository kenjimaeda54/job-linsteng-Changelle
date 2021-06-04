import React,{useState,useEffect} from 'react';
import { useLocation, } from 'react-router';
import { Link } from 'react-router-dom';
import {data} from '../../data';
import done from '../../assets/img/done.svg';
import '../../assets/css/role.css';


const FilterFister =() => {
 const [filters,setFilters] = useState([])
 const [params,setParams] = useState('')
 const location = useLocation();
 const {filter} = location.state;

 useEffect(() => {
  if(filter === 'Fullstack' || filter === 'Backend' || filter === 'Frontend'){
    setParams(filter)
    // eslint-disable-next-line array-callback-return
    const filters = data.filter((value)=>{
      if(value.role === params) return  value;
    });
    setFilters(filters)  
 }  
 }, [filters,params,filter])

   return(
      <div className="container">
      <div className="filters" > 
          <li className="filters-all"  >
             <h3>{filter}</h3>
             <Link  to={'/'}>
               <img className="done"  type="image"  src={done} alt="done" />
             </Link>
          </li> 
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
              <Link className="tool" to={{
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
                className="tool"
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
                    className="tool"
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
                className="tool"
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