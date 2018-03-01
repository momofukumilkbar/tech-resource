import React from 'react'
import getLinkFromString from './getLinkFromString'

const getComponents = (step, matches, result) => {
  const components = []
  let head
  let link
  let start = 0
  let counter = 0
  let end = step.length

  while (matches.length > 0 || end < step.length) {
    if (matches[0]) {
      end = matches[0].index
    } else {
      end = step.length
    }

    if (step.length > 0) {
      head = <span
        key={counter}>
        {step.substring(start, end)}
      </span>
      components.push(head)
      counter ++
    }

    if (matches.length > 0) {
      link = getLinkFromString(matches[0], result)
      components.push(
        <a
          key={counter}
          href={link.link}
          target='_blank'
        >
          {link.linkText}
        </a>
      )
      start = matches[0].index + matches[0][0].length
      matches.shift()
      counter ++
    }
  }
  return components
}

export default getComponents
