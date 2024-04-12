import React from 'react';
import './Tittle.css';
const Tittle = ({title, subTittle}) => {
  return (
    <div  className="tittle">
      <p>{subTittle}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default Tittle;
