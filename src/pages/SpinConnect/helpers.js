import { Octokit } from '@octokit/core'

export const getUserProfile = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const data = await response.json()
  return data
}

export const getRepoList = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  const data = await response.json()
  return data
}

export const getProjectCommits = async ({key, repo, user}) => {
  const octokit = new Octokit({ auth: key })

  const { data } = await octokit.request(`GET /repos/${user}/${repo}/commits`, {
    owner: user,
    repo: repo,
    accept: 'application/vnd.github+json',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  return data
}