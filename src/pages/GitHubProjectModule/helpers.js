import { Octokit } from '@octokit/core'

export const getUserProfile = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const data = await response.json()

  return data
}

export const ghRepoCommits = data => {
  console.log('data: ', data)
  return data.reduce((acc, obj, ind) => {
    const date = obj.commit.author.date.slice(0, 10)
    const prevDate = data[ind - 1] ? data[ind - 1].commit.author.date.slice(0, 10) : null

    // no exit condition set for failed iterations
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


}