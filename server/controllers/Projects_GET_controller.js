const { Octokit } = require('@octokit/core')
const { repoList } = require('../stubs/projectsStub')

const GET_repo_list = async (req, res) => {
  res.status(200).send(JSON.stringify(repoList))
}

const GET_repo_data = async (req, res, next) => {
  const { owner, repo } = req.params

  const octokit = new Octokit()
  await octokit.request(`GET /repos/${owner}/${repo}/commits`, {
    owner: owner,         
    repo: repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  .then(res => res)
  .catch(err => err)
  next()
}

module.exports = {
  GET_repo_list,
  GET_repo_data,
}