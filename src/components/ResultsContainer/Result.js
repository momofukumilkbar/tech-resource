import React from 'react'
import './Result.css'

const Result = ({ name, onClick, category }) =>
  <div className='result' id={name} onClick={onClick}>
    <div onClick={onClick} id={name} className='result-inner-text'>
      <strong onClick={onClick} id={name}>{category}: </strong>{name}
    </div>
  </div>

export default Result
