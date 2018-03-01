const POS_END_OF_DAY = {
  name: 'end of day',
  category: 'pos',
  scenario: 'pos at any location is unresponsive. POS may give a message stating that end of day might need to be completed or that the business day does not match the calendar day',
  steps: [
    'login to brink backend at [link 1] on a microsoft silverlight compatible browser',
    'click on "Devices" from the sidebar',
    'select the affected locaiton',
    'check the affected device',
    'select "Restart Checked"'
  ],
  performedBy: 'tech department',
  links: [
    {
      id: 1,
      link: 'https://admin3.brinkpos.net/Public/Login?ReturnUrl=%2f'
    }
  ],
  possibleSearchQueries: [
    'end of day',
    'synchronization',
    'error',
    'clock in',
    'tablet',
    'business day does not match the calendar day',
    'brink'
  ]
}

export default POS_END_OF_DAY
