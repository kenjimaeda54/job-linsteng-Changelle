import React,{useState,useEffect} from 'react';
import { useLocation,Link } from 'react-router-dom';
import {ParamsFilter,Timer,FiltersStyleButton} from '../../util/index';
import done from '../../assets/img/done.svg';
import '../../assets/css/filter-second.css'



const SecondFilter = () => {
   const [filters,setFilters] = useState([]);
   const [changeStyle,setChangStyle] = useState(false);
   const [buttonClickedRole,setButtonClickedRole] = useState(false);
   const [buttonClickedLevel,setButtonClickedLevel] = useState(false);
   const [buttonClickedLanguages,setButtonClickedLanguages] = useState(false);
   const [buttonClickedTools,setButtonClickedTools] = useState(false);
   const location = useLocation();
   const {filteredList,filterSecondJob,firstJobFilter} = location.state;
   const visible = Timer();
   const filtersStyleButton = FiltersStyleButton(filterSecondJob); 
   const {changeButtonRole,changeButtonLevel,changeButtonTools,changeButtonLanguages} = filtersStyleButton; 
   
   useEffect(()=>{
      const filterDataList = {
         roleButton: ['Frontend','Backend','Fullstack'],
         levelButton: ['Midweight','Junior','Senior'],
         toolsButton : ['React','Sass','Ruby','RoR','Vue','Django'],
         languagesButton: ['CSS','HTML','JavaScript','Python']
      }
      if(filterDataList.languagesButton.includes(firstJobFilter))  return setButtonClickedLanguages(true);
      if(filterDataList.levelButton.includes(firstJobFilter)) return setButtonClickedLevel(true);
      if(filterDataList.roleButton.includes(firstJobFilter)) return setButtonClickedRole(true);
      if(filterDataList.toolsButton.includes(firstJobFilter)) return setButtonClickedTools(true);
     
  },[firstJobFilter])
  useEffect(()=>{
    if(filters.length <= 2 && visible ){
      setChangStyle(true);
    }


  },[visible,filters])
  
 
   useEffect(() => {
      const paramsFilter =  ParamsFilter(filteredList,filterSecondJob)   
      setFilters(paramsFilter)
      //cuidado com a dependências do useEffect,se possuir dependências
      //que sofrem muita renderização vai quebrar, exemplo: filteredList
      // , ela renderiza todo componente. Não e ideal passar 
      //como dependência
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[filterSecondJob])

  
    return(
        <div className="container">
        <div className="filters" > 
          <li className="filters-all"  >
             <h3>{firstJobFilter}</h3>
             <Link  to={{ pathname:'/filter/',
                          state: {firstJobFilter:filterSecondJob}       
             }}>
               <img className="done"  type="image"  src={done} alt="done" />
             </Link>
             <h3 style={{margin:'auto 2vw ' }} >{filterSecondJob}</h3>
             <Link  to={{ pathname: '/filter/',
                          state:  {firstJobFilter} 
               }}>
               <img className='done1' type="image"  src={done} alt="done" />
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
              <Link className={changeStyle || changeButtonRole || buttonClickedRole ? "tool hidden" : "tool"}
               to={{
                pathname: '/filter/second/third',
                state: {listFilter:filters,
                        firstJobFilter,
                        filterSecondJob, 
                        filterThirdJob:item.role, 
                }
              }}>
              {item.role}   
              </Link>
            )}
            {item.level === '' ? (
              ''
            ) : (
              <Link
              className={changeStyle || changeButtonLevel || buttonClickedLevel ? "tool hidden" : "tool"}
                to={{  pathname: '/filter/second/third',
                       state: {listFilter:filters,
                               firstJobFilter,
                               filterSecondJob, 
                                filterThirdJob:item.level 
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
                    className={changeStyle || changeButtonTools || buttonClickedTools? "tool hidden" : "tool"}
                    to={{
                      pathname: '/filter/second/third',
                      state: { listFilter:filters,
                               firstJobFilter,
                               filterSecondJob, 
                               filterThirdJob:value,              
                      },
                    }}
                  >
                    {value}
                  </Link>
                ))}
            {item.languages.map((languages,index) => (
              <Link
                key={index}
                className={changeStyle || changeButtonLanguages || buttonClickedLanguages ? "tool hidden" : "tool"}
                to={{
                  pathname: '/filter/second/third',
                  state: {listFilter:filters,
                          firstJobFilter,
                          filterSecondJob, 
                          filterThirdJob:languages 
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
export default SecondFilter;