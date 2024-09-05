import { React } from 'react'
import { Link, useParams } from 'react-router-dom'
import style from './projectPage.module.css'


const commitsList = commits => {
  return commits.map(commitObj => {
    const { node_id, name, date } = commitObj
    const cleanDate = date.slice(0, 10)
  
  // return
  })
}

const commitListCards = commit => {
  return commit.map(commitObj => {
    const { message, node_id, html_url, name, date } = commitObj
    
    return (
      <Link to={html_url} key={node_id} className={style.card}>
        <h3>{name}</h3>
        <p>{date}</p>
      </Link>
    )
  })
}


export default function ProjectPage(data) {
  const params = useParams()
  const [projectCommits, setProjectCommits] = useState([])
  const [error, setError] = useState('')

  return (
    <div className={style.container}>
      <h1>Project Page</h1>
      <div className={style.commitsList}>
        {commitsList}
      </div>
    </div>
  )
}