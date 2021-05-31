import React from 'react';
import { data } from '../data';
import { Link } from 'react-router-dom';
import '../assets/css/first-page.css'

function FirstPage(){
  return (
    <div className="container"> 
      {data.map((item) => (
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
                to={{ pathname: './filter', state: { filter: item.level } }}
              >
                {item.level}
              </Link>
            )}
            {item.tools.length === 0
              ? '' //{value} porque estamos em uma renderização condicional
              : // não consigo pegar direto
                item.tools.map((value) => (
                  <Link
                    className="tool"
                    to={{
                      pathname: '/filter',
                      state: { filter: value },
                    }}
                  >
                    {value}
                  </Link>
                ))}
            {item.languages.map((languages) => (
              <Link
                className="tool"
                to={{
                  pathname: '/filter',
                  state: { filter: languages },
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

export default FirstPage;
