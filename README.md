#Milk Bar Tech Resource

Easily search through common tech department tasks and step-by-step instructions for completion.

## Contributing
  If you would like to have an item added to this repository, please provide tech@ with an item in the following format and in all lower case:

### General Format

  ```javascript
    {
      name: 'name of the item',
      category: 'category of the item, some examples are: "pos, adt, email"',
      scenario: 'a brief description of the motivation for this action.'
      steps: [
        'steps privided',
        'as quoted strings',
        'separated by commas'
      ],
      preformedBy: 'department that can perform this troubleshooting',
      links: [
        {
          id: 1,
          link: 'https://validlink.com',
          linkText: 'visit valid link'
        }
      ], // links must be provided in the following format and inserted into steps according to the spec below
      possibleSearchQueries: [
        'consider',
        'all possible',
        'search queries',
        'that would be useful for finding this item'
      ]
    }
  ```

### Links
  Links are helpful in cases where more information is needed or one needs to complete the given step on another website. Currently links are only supported as part of steps.
  Links must be inserted using the `[link 1]` format, where the number refers to the link's id in the supplied collection. Example:

  Given the following link collection:

  ```javascript
  links: [
    {
      id: 1,
      link: 'https://validlink.com',
      linkText: 'visit valid link'
    },
    {
      id: 2,
      link: 'https://anothervalidlink.com',
      linkText: 'visit another valid link'
    }
  ]
  ```

  And the following step:

  `visit another valid link for more info`

  I can refer to the second link by inserting `[link 2]` at the desired position in the step:

  `visit another valid [link 2] for more info`

  An example schema using this link and step might look like:

  ```javascript
  {
    name: 'example',
    category: 'example',
    scenario: 'an example'
    steps: [
      `visit another valid [link 2] for more info`,
    ],
    preformedBy: 'anyone',
    links: [
      {
        id: 1,
        link: 'https://validlink.com',
        linkText: 'visit valid link'
      },
      {
        id: 2,
        link: 'https://anothervalidlink.com',
        linkText: 'visit another valid link'
      }
    ],
    possibleSearchQueries: [
      'visit',
      'valid link 2'      
    ]
  }
  ```
