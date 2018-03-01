import React from 'react'
import './ResultDetail.css'
import ParsedStepText from './ParsedStepText'

const ResultDetail = ({ result }) =>
  <div className='result-detail'>
    <h2>{result.name}</h2>
    <h3>
      scenario:
    </h3>
    <p style={{paddingLeft: '40px'}}>
      {result.scenario}
    </p>

    <h3>
      resolution steps:
    </h3>
    <ul style={{listStyle: 'none'}}>
      {result.steps.map((step, index) =>
        <li className='result-step' key={index}>
          <ParsedStepText step={step} result={result} />
        </li>
      )}
    </ul>

  </div>

export default ResultDetail
