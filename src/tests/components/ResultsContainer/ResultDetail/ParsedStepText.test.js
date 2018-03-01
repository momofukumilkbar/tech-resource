import React from 'react'
import ParsedStepText from '../../../../components/ResultsContainer/ResultDetail/ParsedStepText'

const result = {
  name: 'add adt pulse users to a location',
  category: 'adt',
  steps: [
    'please visit [link 1] for a video walkthrough',
    'select the location from the drop down',
    'click "System" from the top selection',
    'click on "Users" from the subselection',
    'click on the Add User button',
    'before inviting a new user, confirm that the user does not already exist'
  ],
  links: [
    {
      id: 1,
      link: 'https://momofukumilkbar.github.io/hangouts-meet-how-to/',
      linkText: 'hangouts meet resource page'
    }
  ],
  possibleSearchQueries: [
    'adt pulse',
    'pulse app',
    'set up user',
    'adt',
    'alarm',
    'app'
  ]
}

const component = shallow(
  <ParsedStepText
    step={result.steps[0]}
    result={result}
  />
)

it('returns an array of strings a link component', () => {
  expect(component.find('a')).toHaveLength(1)
  expect(component.find('span')).toHaveLength(2)
  expect(component.find('a').at(0)).toHaveText('hangouts meet resource page')
})
