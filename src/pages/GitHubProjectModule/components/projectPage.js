import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import style from './projectPage.module.css'
import { ghRepoCommits } from '../helpers'

export default function ProjectPage() {
  const { data } = useLoaderData()
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
    <div className={style.container}>
      <h1>Project Page</h1>
      <div className={style.commitsList}>
        {
          projectCommits.map(({id, html_url, message, name, date }, i) => {
            return (
              <div key={i} className={style.commitCard}>
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