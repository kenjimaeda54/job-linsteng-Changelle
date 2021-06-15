import { Link } from "react-router-dom";
import  projectFilter from "../assets/img/projectFilter.jpg";
import  done from "../assets/img/done.svg"
import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-image: url(${projectFilter}); 
   >div{
       margin-top: 150px;
   }

`;

export const RenderContainer = styled.div`
     display: flex;
     flex-wrap: wrap;
     margin-top: 60px;
     padding: 10px;
     align-items: flex-start;
     width: 100%;
     height: 150px;
     background-color: #fff;
     box-shadow: 0px 15px 20px -5px #0D718226;
`; 

export const LinkStyleRender = styled(Link)`
   background-image: url(${done});
   width: 140px;
   background-repeat: no-repeat;
   background-position: right;
   background-color: #EFFAFA;
   height: 32px;
   font-size: 13px;
   line-height: 24px;
   color: #5CA5A5 ; 
   border-radius: 4px;
   padding: 5px;
   margin: auto 7px;

`;



export const MainContainer = styled.main`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 15px 20px -5px #0D718226;
      background-color: #fff;
      margin: 120px 0px;
      width: 327px;
      height: 257px;
      position: relative;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      
      @media(min-width: 930px){
         width: 70%;
         height: 152px;
         border-radius:5px;
         position: relative;
         flex-direction: row;
        
        &::before{
          border-left:7px solid #5CA5A5 ;
          margin-left: -20px;
        }
         img{      
              position: absolute;
              top: 30px;
              width: 88px;
              height: 88px;
         }
      }

    img{
        width: 48px;
        height: 48px;
        position: absolute;
        bottom: 230px;
        left: 27px;
    }
    &::before{
      display:block ;
      content: '';
      width: 5px;
      height: 100%;
      border-left:20px solid #5CA5A5 ;
      position: absolute;
      left: 0px;
      border-radius: 100px 0px 0px 100px;
    }
    h3{
       font-style: normal;
       font-weight: bold;
       font-size: 15px;
       line-height: 24px;
       color:#2B3939;  

    }


`; 

export const TopCard = styled.div`
       display: flex;
       flex-direction: column;
       align-items:baseline;
       margin-bottom: 55px;

`;


export const TopMain = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        >h3{
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 15px;
        color: #5CA5A5;

       }
      span{
        font-size: 11px;
        line-height: 14px;
        Height:24px;
        border-radius: 21px;
        padding: 5px;
        text-align: center;
        font-weight: bold;
        color: #ffff;
        text-transform: uppercase;
      }

`

 export const FooterMainTop = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;

      @media(max-width:930px){
        &::before{
          display: block;
          position: absolute;
          content: '';
          width: 279px;
          bottom: 120px;
          right: 11px;
          height: 1px;
          border-bottom: 1px solid #B7C4C4;
         }
      }



      >small{
        font-weight: 500;
        font-size: 13px;
        line-height: 24px;
        color:#7C8F8F;
      }
      div{
          background-color: #B7C4C4;
          Width:4px;
          Height:4px;
      }

 `;



export const SecondaryContent = styled.div`
    grid: SC;
    display: flex;
    justify-content: space-between;
    align-items:baseline;
    flex-wrap: wrap;
    width: 60%;
    height: 70px;
    @media(min-width: 930px){
      justify-content: space-evenly;
      align-items:flex-start;
      width: 40%;
      margin-left: 50px;
    }

    
`;


export const LinkStyle = styled(Link)`
      display: ${props=>props.display};
      background-color: #EFFAFA;
      height: 32px;
      font-size: 13px;
      line-height: 24px;
      color: #5CA5A5 ; 
      border-radius: 4px;
      padding: 5px; 
    
`;

  export const LinkStyleClear = styled(Link) `
      position: absolute;
      margin: auto 20px;
      bottom: 450px;
      right: 0;
      height: 32px;
      font-size: 13px;
      line-height: 24px;
      color: #7C8F8F ; 
      @media(min-width:930px){
        bottom:  250px;
      } 
  `;
   

