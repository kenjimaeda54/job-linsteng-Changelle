import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {ParamsFilter,Timer,FiltersStyleButton} from '../../util/index';
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
        <Container>
        <RenderContainer > 
             <LinkStyleRender  to={{ pathname:'/filter/',
                          state: {firstJobFilter:filterSecondJob}       
                        }}>  
                     <small>{firstJobFilter}</small>
             
             </LinkStyleRender>        
             <LinkStyleRender  to={{ pathname: '/filter/',
                                     state:  {firstJobFilter} 
                                  }}>
                <small>{filterSecondJob}</small>    
             </LinkStyleRender>  
                <small style={{color:'red',fontWeight:'500',margin:'auto 20px'}} >{changeStyle && 'Sua lista possui 3 ou menos itens,para filtra novamente precisa limpar a lista' }</small>        
             <LinkStyleClear to={'/'}  > Limpar </LinkStyleClear>  
       </RenderContainer> 
         {filters.map((item) => (
        <MainContainer key={item.id} >
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
              <LinkStyle display={changeStyle || changeButtonRole || buttonClickedRole ? "none" : "block"}
               to={{
                pathname: '/filter/second/third',
                state: {listFilter:filters,
                        firstJobFilter,
                        filterSecondJob, 
                        filterThirdJob:item.role, 
                }
              }}>
              {item.role}   
              </LinkStyle>
            )}
            {item.level === '' ? (
              ''
            ) : (
              <LinkStyle
              display={changeStyle || changeButtonLevel || buttonClickedLevel ? "none" : "block"}
                to={{  pathname: '/filter/second/third',
                       state: {listFilter:filters,
                               firstJobFilter,
                               filterSecondJob, 
                                filterThirdJob:item.level 
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
                    display={changeStyle || changeButtonTools || buttonClickedTools? "none" : "block"}
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
                  </LinkStyle>
                ))}
            {item.languages.map((languages,index) => (
              <LinkStyle
                key={index}
                display={changeStyle || changeButtonLanguages || buttonClickedLanguages ? "none" : "block"}
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
              </LinkStyle>
            ))}
          </SecondaryContent>
        </MainContainer>
      ))}
        </Container> 
    );

    
}
export default SecondFilter;