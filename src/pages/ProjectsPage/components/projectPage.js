import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ghRepoCommits } from '../helpers'

export default function ProjectPage() {
  const [projectCommits, setProjectCommits] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    if (data) {
      setProjectCommits(() => ghRepoCommits(data))
    } else {
      setError('No data found')
    }
  }, [])

  return (
    <div className={'container'}>
      <h1>Project Page</h1>
      <div className={'commits-list'}>
        {
          projectCommits.map(({ id, html_url, message, name, date }) => {
            return (
              <div key={id} className={'commit-card'}>
                <h3>{date}</h3>
                <p>Author: {name}</p>
                <p>Message: {message}</p>
                <Link to={html_url}>Link to commit</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}