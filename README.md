# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  


## Front Mentor - Job-Linteng
Esta é a solução para [Interactive pricing component changelle on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8)</br> 
Front Mentor changelles ajuda voce melhorar suas habilidades construindo projetos realistas 
 
## Tabelas de conteudos 
* Visão geral
  * <a href='#Desafio' >  Desafio </a>
  * <a href='#Links' >  Links </a>
* Meus processos
  * <a href='#Construção' >  Construção </a>   
  * <a href='#o-que-eu-aprendi' >  Aprendizado </a>
  * <a href='#Feature' >  Feature </a>
* <a href='#Autor' >  Autor </a> 

## Visão Geral
## Desafio
- Desafio:</br>
  Otimizar o layout conforme a tela do dispositivo do usuario</br>
  Ver todos os estados interativos da tela</br>
  Filtrar as listas conforme as categorias</br>

## Links
 - Saite da solução:[filter_job]https://job-linsteng-kenji.netlify.app/)
 - Url da solução: [Kenji solutions](https://www.frontendmentor.io/solutions/react-js-styled-component-7GLAdH6PQ)

## Construção
  - React
  - CSS
  - FlexBox
  - JSX
  - Styled Componet
  


## O que eu aprendi

Eu aprendi a manipular estados funcionais do React,leitura de documentações é manipular estilos com  </br> 
[Styled Component](https://styled-components.com/)</br>
Esta biblioteca é excelente para estilizar em React</br>
</br>

Usei algumas metodologias de software, exemplo: SOLID e Singleton. Toda filtragem que repetia constantemente no codigo foi separado.</br>
Reduzindo o codigo, melhora na manutenção e posibilidade de extensão.</br>
O codigo abaixo é um exemplo. Em um arquvio separei minha lista de trabalhos para posibiltar filtragem dinamica.</br>
E apos isso, separei em outro arquivo toda logica de filtragem que repetia ao longo da aplicação.

~~~javascript 
export const data = [
  {
    id: '1',
    company: 'Photosnap',
    logo: photoSnap,
    new: true,
    featured: true,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: '2',
    company: 'Manage',
    logo: manage,
    new: true,
    featured: true,
    position: 'Fullstack Developer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1d ago',
    contract: 'Part Time',
    location: 'Remote',
    languages: ['Python'],
    tools: ['React'],
  },
  { ................}
  }, 
  
  const FilterFister =() => {
  
  const checkParameters = ParamsFilter(data,firstJobFilter)
  }
  export default FilterFister;
  
  
  const SecondFilter = () => {
   
    const paramsFilter =  ParamsFilter(filteredList,filterSecondJob) 
  
  }
  export default SecondFilter;
  
  export const ParamsFilter = (list, paramsJob) =>{
   const listFilter ={
    languages: list.filter(value=>{if(value.languages.includes(paramsJob)) return value}),
    // eslint-disable-next-line array-callback-return
    tools: list.filter(value=>{if(value.tools.includes(paramsJob)) return value }),
    role:  list.filter(value=> value.role === paramsJob ),
    level: list.filter(value=>value.level === paramsJob),
    }
    if(listFilter.role.length !== 0 ) return listFilter.role
    if(listFilter.level.length !== 0 ) return listFilter.level
    if(listFilter.languages.length !== 0 ) return listFilter.languages
    if(listFilter.tools.length !== 0 ) return listFilter.tools
}
 ~~~
 Repare no codgio acima ParamsFilter, se repete ao longo da aplicação,então criei uma função separada,assim preciso apenas</br>
 chamar essa função ao longo do sofwtare.Essa função precisa de dois parametros, nossa data é o segundo</br>
 parametro e nosso requisito,ao longo da aplicação nosso data vai se reduzindo em listas menores,ate atingir no maximo 3 filtragens.</br>
 Então na primeira chamada de ParamsFilter ele recebe o data completo,no segundo recebe a data filtrada e assim por diante.

 Conforme nossa data vai renderizando na tela,alguns compononentes renderiza constantemente, gerando instabilidade,para resolver isto </br>
 utilizei o hooks [useInterval](https://github.com/beautifulinteractions/beautiful-react-hooks/blob/HEAD/docs/useInterval.md).
 Para iniciar com ela [clica aqui](https://www.npmjs.com/package/beautiful-react-hooks).
 
 ```javascript
 export const Timer = () =>{
  const[visible,setVisible] = useState(false) 
     
     useTimeout(()=>{
         setVisible(true)
     }, 100)
  return visible;

};

 ```
 Com styled component pode passar props ao longo da aplicação para os estilos. Obervação com intellisense, na passagem de props, não me fornecia dica.</br>
 como estamos acostumados,ao apertar ctrl + espaço,mas funcionou perfeitamente inclusive  maneira que utilizei e recomendada pela documentação,por fim
 não gerou erro ao longo do sofwtare.</br>
 Outro recurso interesante, com essa bbilbioteca,posso estilizar componentes do java script, Link é propriedade de react-router-dom.</br>
 Com a tecnica abaixo fiz a estilização sem problemas.</br>
 Docs do styled component [clica aqui](https://styled-components.com/)
 Repare em styled(Link), aqui estou referenciando que vou estilizar o link do react router dom,preciso importar a propriedade da biblioteca no arquivo estou usando  para estilizar os componentes.
 Repare na propriedade display, com ela fiz a passagem de props,assim dinaminamicamente o display vai ser none,quando changeStyle for true.
 
  ```javascript
  
  const FilterFister =() => {
  
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
              
  }
  export defaul FIlterFister
  
  import styled from "styled-components";
  import { Link } from "react-router-dom";
  
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
  
  ```
  Com react router dom foi possivel navegar entre as abas e passar props ao longo da aplicação com a propriedade to, useLocation.</br>
  Outro recurso de boa pratica utilizado foi o destruction, com esse recurso pego as propriedades do meu objeto.
  Docs do [react router dom](https://reactrouter.com/web/guides/quick-start).
  
  ```javascript
  const FilterFister =() => {
  
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
              
  }
  export default FilterFister

  import { useLocation } from 'react-router-dom';

  const SecondFilter = () => {
  
   const location = useLocation();
   const {filteredList,filterSecondJob,firstJobFilter} = location.state;

  }
  export default SecondFIlter
  
  
  ```
  Recurso básico que gerou bastante dificuldade para mim, foi como pegar dentro de um array de objetos outro array,por isso achei interesante colocar aqui.</br>
  Repare na chave languages.
  Eu filtrava e retornava corretamente o array,mas precisava dentro da função filter, retornar apenas os valores  do array languages:
  Com a propriedade includes(paramsJob). Eu verifico se existe  elemento quero pegar,caso for verdade ele vai gerar true.</br>
  No codigo abaixo em languages, retorna so os valores dentro do array languages.</br>
  Existe o find e outros recursos,porém interesante  includes compara não so os tipos,mas também valores,então para estes casso e ideal</br>
 
 ```javascript
 export default data=[  
    {
    id: '3',
    company: 'Account',
    logo: account,
    new: true,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2d ago',
    contract: 'Part Time',
    location: 'USA Only',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
  ]
 
 languages: list.filter(value=>{if(value.languages.includes(paramsJob)) return value}),
 
 ```
 
 Outro recurso basico gostaria de compartilhar aqui é background img no styled component</br>
 Ele utiliza mesma maneira que react faz para gerar imagem em src. Preciso importar uma variavel com caminho da imagem.
 
 
 ```javascript
 import  projectFilter from "../assets/img/projectFilter.jpg";
 
 
 export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-image: url(${projectFilter}); 
   >div{
       margin-top: 150px;
   }

`;
 
 
 ```
 
 
 
 # Feature
  - Hooks
  - styled component
  - Solid
  - Media Screen

## Autor
 - Frontend Mentor - [@kenjimaeda54](https://www.frontendmentor.io/profile/kenjimaeda54)



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
