import React,{useState} from 'react';
import { useLocation, } from 'react-router';
import {data} from '../../data';
import { useEffect } from 'react';
import {Timer,ParamsFilter,FiltersStyleButton} from '../../util'
import {Container,
  MainContainer,
  SecondaryContent,
  TopCard,
  TopMain,
  FooterMainTop,
  LinkStyle,
  RenderContainer,
  LinkStyleClear,
  LinkStyleRender
} from '../styles' 





const FilterFister =() => {
 const [filters,setFilters] = useState([]);
 const [changeStyle,setChangeStyle] = useState(false);
 const visible = Timer(); 
 const location = useLocation();
 const {firstJobFilter} = location.state;
 const filtersStyleButton = FiltersStyleButton(firstJobFilter)
 const {changeButtonRole,
       changeButtonLevel,
        changeButtonTools,
        changeButtonLanguages
} = filtersStyleButton;



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
      <Container> 
        <RenderContainer> 
             <LinkStyleRender  to={'/'}>
               <small>{firstJobFilter}</small>
             </LinkStyleRender>
             <small style={{color:'red',fontWeight:'500',margin:'auto 20px'}} >{changeStyle && 'Sua lista possui 3 ou menos itens,para filtra novamente precisa limpar a lista' }</small>
             <LinkStyleClear  to={'/'}  > Limpar </LinkStyleClear>  
       </RenderContainer> 
         {filters.map((item) => (
        <MainContainer key={item.id}>
          <img src={item.logo} alt="company" />
          <TopCard>
          <TopMain>   
            <h3>{item.company}</h3>
            {item.new ? <span> new </span> : ''}
            {item.featured ? (
              <span style={{ backgroundColor: 'black' }}> featured </span>
            ) : (
              ''
            )}
          </TopMain>  
          <div>
            <h3>{item.position}</h3>
          </div> 
          <FooterMainTop>
          
             <small>{item.postedAt}</small> 
            <div> </div>
            <small>{item.contract}</small>
            <div></div>   
            <small> {item.location}</small>
       
          </FooterMainTop>
          </TopCard>
          <SecondaryContent>
            {item.role === '' ? (
              ''
            ) : (
  
              <LinkStyle   display={changeStyle || changeButtonRole? 'none' : 'block' }  
              to={{
                pathname: '/filter/second',
                state: {filteredList: filters,
                        filterSecondJob: item.role,
                        firstJobFilter,
                }
              }}>
              {item.role}   
              </LinkStyle> 
            )}
            {item.level === '' ? (
              ''
            ) : (
              <LinkStyle

              display={changeStyle || changeButtonLevel  ? 'none' : 'block' }
                to={{  pathname: '/filter/second',
                       state: {filteredList: filters,
                               filterSecondJob: item.level,
                               firstJobFilter,
                               }}}
              >
                {item.level}

              </LinkStyle>
            )}
            {item.tools.length === 0
              ? '' //{value} porque estamos em uma renderização condicional
              : // não consigo pegar direto
                item.tools.map((value,index) => (  
                  <LinkStyle
                    key={index}
                    display={changeStyle || changeButtonTools  ? 'none' : 'block' }
                    to={{
                      pathname: '/filter/second',
                      state: { filteredList: filters,
                        filterSecondJob: value,
                        firstJobFilter,
                      
                      }}}
                  >
                    {value}
                  </LinkStyle>
                ))}
            {item.languages.map((languages,index) => (
              <LinkStyle
                key={index}
                display={changeStyle || changeButtonLanguages ? 'none' : 'block' }
                to={{
                  pathname: '/filter/second',
                  state: { filteredList: filters,
                    filterSecondJob: languages,
                    firstJobFilter, 
                  },
                }}
              >
                {languages} 
              </LinkStyle>
            ))}
          </SecondaryContent>
        </MainContainer>
      ))}
    </Container>
   ); 

}

export default FilterFister;