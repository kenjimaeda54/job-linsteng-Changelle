import React,{useState} from 'react';
import { useLocation, } from 'react-router';
import { Link } from 'react-router-dom';
import {data} from '../../data';
import { useEffect } from 'react';
import {Timer,ParamsFilter,FiltersStyleButton} from '../../util'
import done from '../../assets/img/done.svg';
import '../../assets/css/filter.css';




const FilterFister =() => {
 const [filters,setFilters] = useState([]);
 const [changeStyle,setChangeStyle] = useState(false);
 const visible = Timer(); 
 const location = useLocation();
 const {firstJobFilter} = location.state;
 const filtersStyleButton = FiltersStyleButton(firstJobFilter)
 const {changeButtonRole,changeButtonLevel,changeButtonTools,changeButtonLanguages} = filtersStyleButton;



 useEffect(()=>{
   if(filters.length <=2  && visible ){
      setChangeStyle(true)
   }

 },[visible,filters])

 useEffect(()=>{
       const checkParameters = ParamsFilter(data,firstJobFilter)  
       setFilters(checkParameters);

  },[firstJobFilter])



   return(
      <div className="container">
      <div className="filters" > 
          <li className="filters-all"  >
             <h3>{firstJobFilter}</h3>
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
  
              <Link className={changeStyle || changeButtonRole? 'tool hidden' : 'tool' }  
              to={{
                pathname: '/filter/second',
                state: {filteredList: filters,
                        filterSecondJob: item.role,
                        firstJobFilter,
                }
              }}>
              {item.role}   
              </Link> 
            )}
            {item.level === '' ? (
              ''
            ) : (
              <Link

              className={changeStyle || changeButtonLevel  ? 'tool hidden' : 'tool' }
                to={{  pathname: '/filter/second',
                       state: {filteredList: filters,
                               filterSecondJob: item.level,
                               firstJobFilter,
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
                    className={changeStyle || changeButtonTools  ? 'tool hidden' : 'tool' }
                    to={{
                      pathname: '/filter/second',
                      state: { filteredList: filters,
                        filterSecondJob: value,
                        firstJobFilter,
                      
                      }}}
                  >
                    {value}
                  </Link>
                ))}
            {item.languages.map((languages,index) => (
              <Link
                key={index}
                className={changeStyle || changeButtonLanguages ? 'tool hidden' : 'tool' }
                to={{
                  pathname: '/filter/second',
                  state: { filteredList: filters,
                    filterSecondJob: languages,
                    firstJobFilter, 
                  },
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