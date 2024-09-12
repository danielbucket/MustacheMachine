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
          projectCommits.map(commit => {
            const { id, html_url, message, name, date } = commit
            
            return (
              <div key={id} className={style.commitCard}>
                <h3>{message}</h3>
                <p>Author: {name}</p>
                <p>Date: {date}</p>
                <a href={html_url}>Link to commit</a>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}