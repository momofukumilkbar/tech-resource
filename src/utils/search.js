import troubleshootingItems from '../constants/troubleshootingItems'

const search = value =>
  troubleshootingItems.filter(item =>
    item.possibleSearchQueries.find(query =>
      query.toLowerCase().indexOf(value) > -1
    ) || item.category.toLowerCase().indexOf(value) > -1
  )

export default search
