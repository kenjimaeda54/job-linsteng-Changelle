import React from 'react';
import {useLocation,Link} from 'react-router-dom';
import done from '../../assets/img/done.svg'
import '../../assets/css/third-filter.css'
 



const ThirdFilter = () => {
    const location = useLocation();;
    const {filter,array,role,level,props,propsFilter} = location.state;
    // eslint-disable-next-line array-callback-return
    const filters = array.filter((item,index) =>{
         if(item.tools.includes(filter)) return item;
    })
      
    return(
      <div className="container">
      <div className="filters" > 
        <li className="filters-all"  >
           <h3>{role}</h3>
           <Link  to={'/'}>
             <img className="done"  type="image"  src={done} alt="done" />
           </Link>
           <h3 style={{margin:'auto 2vw ' }} >{level}</h3>
           <Link  to={{ pathname: '/filter',
                        state:  {filter: role} 
             }}>
             <img className='done1' type="image"  src={done} alt="done" />
           </Link>
           <h3 style={{margin:'auto 2vw ' }} >{filter}</h3>  
           <Link  to={{ pathname: '/filter/second',
                        state:  {filter: propsFilter,
                                 level,
                                 role,                                  
                                } 
             }}>
             <img className='done2' type="image"  src={done} alt="done" />
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
              pathname: '/filter',
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
              to={{  pathname: '/role/level',
                     state: {filter: filters,
                             level: item.level,
                             role: item.role
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
                    pathname: '/role/level/tools',
                    state: { filter: value, 
                             role,
                             level,
                             props,
                             array: filters, 
                    
                    },
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
                pathname: '/role/level/tools',
                state: { filter: languages,
                         array: filters, 
                         role,
                         level,
                         props,
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
export default ThirdFilter;