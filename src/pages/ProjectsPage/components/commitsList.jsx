import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function CommitsList({ commits }) {
  const [errorState, setError] = useState(null)
  const navigate = useNavigate()

  if (errorState !== null) {
    navigate('/error', { state: { errorState } })
  }

  return (
    <div className={'commits-list'}>
      {
        commits.map(({ id, html_url, message, name, date }) => {
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