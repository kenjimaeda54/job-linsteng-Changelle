import React,{useState,useEffect} from 'react';
import {useLocation,Link} from 'react-router-dom';
import {ParamsFilter} from "../../util/index"
import done from '../../assets/img/done.svg'
import '../../assets/css/third-filter.css'
 



const ThirdFilter = () => {
    const [filters,setFilters] = useState([])
    const location = useLocation();
    const {filterThirdJob,listFilter,firstJobFilter,filterSecondJob} = location.state;
     
  useEffect(() => {
    const paramsFilter = ParamsFilter(listFilter,filterThirdJob) 
    setFilters(paramsFilter)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterThirdJob])


    return(
      <div className="container">
      <div className="filters" > 
        <li className="filters-all"  >
           <h3>{firstJobFilter}</h3>
           <Link  to={'/'}>
             <img className="done"  type="image"  src={done} alt="done" />
           </Link>
           <h3 style={{margin:'auto 2vw ' }} >{filterSecondJob}</h3>
           <Link  to={{ pathname: '/filter/second',
                        state:  {filterSecondJob:filterThirdJob,
                          filteredList:listFilter,   
                          firstJobFilter  

                        } 
             }}>
             <img className='done1' type="image"  src={done} alt="done" />
           </Link>
           <h3 style={{margin:'auto 2vw ' }} >{filterThirdJob}</h3>  
           <Link  to={{ pathname: '/filter/second',
                        state:  {filterSecondJob,
                                 filteredList:listFilter,   
                                 firstJobFilter                                 
                                } 
             }}>
             <img className='done2' type="image"  src={done} alt="done" />
           </Link>  
        </li>
        <small>Atingiu limite de filtros</small>        
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
            <Link className="tools" to={'/'} >
            {item.role}   
            </Link>
          )}
          {item.level === '' ? (
            ''
          ) : (
            <Link className="tools" to={'/'}  >
              {item.level}

            </Link>
          )}
          {item.tools.length === 0
            ? '' //{value} porque estamos em uma renderização condicional
            : // não consigo pegar direto
              item.tools.map((value,index) => (
                <Link key={index} className="tools"  >
                  {value}
                </Link>
              ))}
          {item.languages.map((languages,index) => (
            <Link key={index} className="tools"to={'/'} >
              {languages} 
            </Link>
          ))}
        </div>
      </div>
    ))}
      </div> 
  );
}
export default ThirdFilter;