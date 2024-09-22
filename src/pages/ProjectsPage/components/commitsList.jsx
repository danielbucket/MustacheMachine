import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { commitSorter } from './helpers'

function CommitsList() {
  const [projectCommits, setProjectCommits] = useState([])
  const [errorState, setError] = useState(null)
  const { params } = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    fetch(`/api/v1/projects/GET_repo_data/${params.user}/${params.repo}`)
    .then(res => res.json())
    .then(data => setProjectCommits(() => commitSorter(data)))
    .catch(err => setError(() => err))
  }, [])

  if (errorState !== null) {
    navigate('/error', { state: { errorState } })
  }

  return (
    <div className={'container'}>
      <h1>Project Page</h1>
      <div className={'commits-list'}>
        {
          projectCommits.map(({ id, html_url, message, name, date }) => {
            return (
              <div key={ id } className={'commit-card'}>
                <h3>{date}</h3>
                <p>Author: {name}</p>
                <p>Message: {message}</p>
                <Link to={ html_url }>Link to commit</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CommitsList