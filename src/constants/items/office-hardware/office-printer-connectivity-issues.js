const OFFICE_PRINTER_CONNECTIVITY_ISSUES = {
  name: 'office printer connectivity issues',
  lastUpdated: '3/1/2018',
  type: 'troubleshoooter',
  category: 'office hardware',
  scenario: 'any of the office printers are experiencing connectivity issues',
  steps: [
    'this troubleshooter can be completed by anyone in the office',
    'this troubleshooter was last updated on 3/1/2018. If any of the data is inaccurate here, [link 1] to update.',
    'identify if the issue is isolated to one computer. If this is a widespread issue, restart the printer.',
    'confirm that the office wifi is online',
    'if this issue is isolated to one computer, clear that computer\'s print queue, and restart the computer. You may also remove the printer from the connected devices and reconnect. If both steps fail, download drivers: Canon: [link 2], Dell: [link 3]',
  ],
  links: [
    {
      id: 1,
      link: 'https://github.com/momofukumilkbar/tech-resource/blob/master/README.md',
      linkText: 'submit a pull request'
    },
    {
      id: 2,
      link: 'https://www.usa.canon.com/internet/portal/us/home/support/details/printers/black-and-white-laser/imageclass-d1550/imageclass-d1550',
      linkText: 'canon 1500 drivers'
    },
    {
      id: 3,
      link: 'http://www.dell.com/support/home/us/en/04/product-support/product/dell-b1260dn/drivers',
      linkText: 'dell b1260dn drivers'
    }
  ],
  possibleSearchQueries: [
    'office',
    'printer',
    'network',
    'wifi',
    'internet'
  ]
}

export default GOOGLE_CALENDAR_STARTING_A_HANGOUTS_MEET_MEETING
