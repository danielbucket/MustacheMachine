import React, { useEffect, useState } from 'react'
import { Link, useParams, useLoaderData } from 'react-router-dom'
import style from './projectPage.module.css'
import { ghRepoCommits } from '../helpers'

export default function ProjectPage() {
  const { data } = useLoaderData()
  const params = useParams()
  const [projectCommits, setProjectCommits] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    console.log(ghRepoCommits(data))
    // setProjectCommits(() => ghRepoCommits(data))
  })

  return (
    <div className={style.container}>
      <h1>Project Page</h1>
      <div className={style.commitsList}>
        {/* {commitsList} */}
      </div>
    </div>
  )
}