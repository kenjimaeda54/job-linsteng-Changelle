import React,{useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {ParamsFilter} from "../../util/index"
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
      <Container>
      <RenderContainer> 
           <LinkStyleRender  to={'/'}>
               <small>{firstJobFilter}</small>
           </LinkStyleRender>
           <LinkStyleRender  to={{ pathname: '/filter/second',
                        state:  {filterSecondJob:filterThirdJob,
                          filteredList:listFilter,   
                          firstJobFilter  

                        } 
             }}>
             <small >{filterSecondJob}</small>
           </LinkStyleRender> 
           <LinkStyleRender  to={{ pathname: '/filter/second',
                        state:  {filterSecondJob,
                                 filteredList:listFilter,   
                                 firstJobFilter                                 
                                } 
             }}>
               <small style={{margin:'auto 2vw ' }} >{filterThirdJob}</small>  
           </LinkStyleRender> 
        <small>Atingiu limite de filtros</small>        
        <LinkStyleClear to={'/'} > Limpar </LinkStyleClear>  
     </RenderContainer> 
       {filters.map((item) => (
      <MainContainer key={item.id} >
        <img src={item.logo} alt="company" />
        <TopCard >
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
            <LinkStyle display="none" to={'/'} >
            {item.role}   
            </LinkStyle>
          )}
          {item.level === '' ? (
            ''
          ) : (
            <LinkStyle display="none" to={'/'}  >
              {item.level}

            </LinkStyle>
          )}
          {item.tools.length === 0
            ? '' //{value} porque estamos em uma renderização condicional
            : // não consigo pegar direto
              item.tools.map((value,index) => (
                <LinkStyle key={index} display="none" to={'/'} >
                  {value}
                </LinkStyle>
              ))}
          {item.languages.map((languages,index) => (
            <LinkStyle key={index} display="none" to={'/'}  >
              {languages} 
            </LinkStyle>
          ))}
        </SecondaryContent>
      </MainContainer>
    ))}
      </Container> 
  );
}
export default ThirdFilter;