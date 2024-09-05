const { Octokit } = require('@octokit/core')
const ghProjectsDataStub = require('../stubs/gh_RepoList')

const GET_ghRepoList = async (req, res) => {
  res.send(ghProjectsDataStub)
}

const GET_ghRepoData = async (req, res, next) => {

  const octokit = new Octokit()
  const { owner, repo } = req.query

  console.log('GET_ghProjectRepoList: ', req.query)

  await octokit.request(`GET /repos/${owner}/${repo}/commits`, {
    owner: owner,
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