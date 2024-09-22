export const getUserProfile = async username => {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const data = await response.json()

  return data
}

export const commitSorter = data => {
  return data.map(obj => {
    const { id } = obj.committer
    const { commit, html_url } = obj
    const { author, message } = commit
    const { name } = author
    const date = author.date.slice(0, 10)

    return Object.assign({}, id, html_url, message, name, date )
  })
}