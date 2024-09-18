const { Octokit } = require('@octokit/core')
const { repoList } = require('../stubs/projectsStub')

const GET_ghRepoList = async (req, res) => {
  res.send(repoList)
}

const GET_ghRepoData = async (req, res, next) => {
  const { user, repo } = req.params
  const octokit = new Octokit()

  await octokit.request(`GET /repos/${user}/${repo}/commits`, {
    owner: user,
    repo: repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  })
  .then(response => {
    res.status(200).send(JSON.stringify(response))
  })
  .catch(err => {
    res.status(404).send(JSON.stringify(err))
  })
  next()
}

module.exports = {
  GET_ghRepoList,
  GET_ghRepoData,
}