import React from 'react'

const getLinkFromString = (string, result) => {
  const linkNumber = /\d+/.exec(string)
  return result.links.find(link => link.id === parseInt(linkNumber[0], 20))
}

const findMatches = step => {
  const linkRegex = /\[link \d+\]/g
  let match
  let matches = []

  while ((match = linkRegex.exec(step)) != null) {
    matches.push(match)
  }
  
  return matches
}

const ParsedStepText = ({ step, result }) => {
  const matches = findMatches(step)

  if (matches.length === 0) { return <div>{step}</div> }

  const components = []
  let head
  let link
  let start = 0
  let counter = 0

  while (matches.length > 0) {
    head = <span
      key={counter}>
      {step.substring(start, matches[0].index)}
    </span>
    components.push(head)
    counter ++

    link = getLinkFromString(matches[0], result)
    components.push(
      <a
        key={counter}
        href={link.link}
        target='_blank'
      >
        {link.link}
      </a>
    )

    start = matches[0].index + matches[0][0].length
    matches.shift()
    counter ++
  }

  return <div>{components}</div>
}

export default ParsedStepText
