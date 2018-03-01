import React from 'react'
import getComponents from '../../../utils/getComponents'

const findMatches = step => {
  const linkRegex = /\[link \d+\]/g
  let match
  let matches = []

  while ((match = linkRegex.exec(step)) != null) {
    matches.push(match)
  }

  return matches
}

const stripContent = (matches, string) => {

}

const ParsedStepText = ({ step, result }) => {
  const matches = findMatches(step)

  if (matches.length === 0) { return <div>{step}</div> }

  const components = getComponents(step, matches, result)
  return <div>{components}</div>
}

export default ParsedStepText
