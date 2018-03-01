import React from 'react'
import ParsedStepText from '../../../../components/ResultsContainer/ResultDetail/ParsedStepText'

const result = {
  name: 'add adt pulse users to a location',
  category: 'adt',
  steps: [
    'login to adt pulse at [link 1] and [link 2]',
    'select the location from the drop down',
    'click "System" from the top selection',
    'click on "Users" from the subselection',
    'click on the Add User button',
    'before inviting a new user, confirm that the user does not already exist'
  ],
  links: [
    {
      id: 1,
      link: 'https://portal.adtpulse.com/myhome/9.6.0-610/access/signin.jsp'
    },
    {
      id: 2,
      link: 'https://portal.adtpulse.com/myhome/9.6.0-610/access/signin.jsp'
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
  // console.log(component.debug())
})
