import React from 'react';
import { data } from '../data';
import {Container,
        MainContainer,
        SecondaryContent,
        TopCard,
        TopMain,
        FooterMainTop,
        LinkStyle
} from './styles'

function FirstPage(){
  return (
    <Container>
      <div></div>
      {data.map((item) => (
        <MainContainer key={item.id} >
          <img src={item.logo} alt="imagem logo das empresas"  />
          <TopCard >
          <TopMain> 
            <h3>{item.company}</h3>
            {item.new ? <span style={{backgroundColor:"#5ca5a547"}} > new </span> : ''}
            {item.featured ? (
              <span style={{backgroundColor: "#5CA5A5"}} > featured </span>
            ) : (
              ''
            )}
          </TopMain>  
          <div >
            <h3>{item.position}</h3>
          </div>
          <FooterMainTop>
          
             <small>  {item.postedAt}</small> 
             <div> </div>
             <small>{item.contract}   </small>
             <div></div>   
             <small> {item.location}  </small>
          
          </FooterMainTop>
          </TopCard>
          <SecondaryContent>
            {item.role === '' ? (
              ''
            ) : (
              <LinkStyle className="tool" to={{
                pathname: '/filter',
                state: {firstJobFilter:item.role}
              }}>
                {item.role}
              </LinkStyle>
            )}
            {item.level === '' ? (
              ''
            ) : (
              <LinkStyle
                to={{ pathname: './filter', state: { firstJobFilter: item.level } }}
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
                    to={{
                      pathname: '/filter',
                      state: { firstJobFilter: value },
                    }}
                  >
                    {value}
                  </LinkStyle>
                ))}
            {item.languages.map((languages,index) => (
              <LinkStyle
                key={index}
                to={{
                  pathname: '/filter',
                  state: { firstJobFilter: languages },
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

export default FirstPage;
