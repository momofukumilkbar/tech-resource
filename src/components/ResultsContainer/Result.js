import React from 'react'
import './Result.css'

const Result = ({ name, onClick, category }) =>
  <div
    className='result'
    id={name}
    onClick={onClick}
  >
    <strong>{category}: </strong>{name}

  </div>

export default Result
