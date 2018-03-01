const ADT_ADD_USERS_TO_PULSE = {
  name: 'add adt pulse users to a location',
  category: 'adt',
  scenario: 'a manager is requesting access to a location in ADT pulse. this kind of action must be initiated by a manager.',
  steps: [
    'login to adt pulse at [link 1]',
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

export default ADT_ADD_USERS_TO_PULSE
