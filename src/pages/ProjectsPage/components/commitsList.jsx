import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { commitSorter } from './helpers'

function CommitsList() {
  const [errorState, setError] = useState(null)
  const navigate = useNavigate()

  if (errorState !== null) {
    navigate('/error', { state: { errorState } })
  }

  return (
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
  )
}

export default CommitsList