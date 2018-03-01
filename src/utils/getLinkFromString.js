const getLinkFromString = (string, result) => {
  const linkNumber = /\d+/.exec(string)
  return result.links.find(link => link.id === parseInt(linkNumber[0], 20))
}

export default getLinkFromString
