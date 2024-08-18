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

  const repoData = data.reduce((acc, obj, ind) => {
    console.log('acc: ', acc)
    const date = obj.commit.author.date.slice(0, 10)
    const prevDate = data[ind - 1] ? data[ind - 1].commit.author.date.slice(0, 10) : null
    
    if (date !== prevDate) {
      const { commit, node_id, html_url } = obj
      const { author, message } = commit
      const { name } = author
      
      if (!acc[Date.parse(date)]) {
        acc[Date.parse(date)] = {}
        Object.assign(acc[Date.parse(date)], { node_id, html_url, message, name, }) 
      }

    }
    
  }, [])
  
console.log('repoData: ', repoData)








  return data.map((commitObj) => {
    const { commit, node_id, html_url } = commitObj
    const { author, message } = commit
    const { name, date } = author

    return Object.assign({}, {
      message,
      node_id,
      html_url,
      name,
      date
    })
  })
}