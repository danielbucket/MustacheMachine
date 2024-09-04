const GET_projectModuleList = (req, res, next) => {
  const { username, repo } = req.query

  const response = fetch(`https://api.github.com/users/${username}/repos/${repo}`)
  const data = response.json()

  res.status(200).send(JSON.stringify(data))
  next()
}

module.exports = {
  GET_projectModuleList
}