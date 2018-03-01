import React from 'react'
import './ResultsContainer.css'
import Result from './Result'
import ResultDetail from './ResultDetail/ResultDetail'

const ResultsContainer = ({ results, onClick, selectedResult }) =>
  <div className='results-container'>
    { selectedResult
      ? <ResultDetail result={selectedResult} />
      : results.map((result, index) =>
      <Result
        category={result.category}
        name={result.name}
        key={index}
        onClick={onClick}
      />
    )}
  </div>

export default ResultsContainer
