import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import styles from './AddPost.module.css'

const AddPost = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      //call to back goes here
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const {title, content} = formData

  const isFormInvalid = () => {
    return !(title && content)
  }

  return (
    <>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor='title' className={styles.label}>Title</label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='title' className={styles.label}>Content</label>
          <textarea
            type="text"
            autoComplete="off"
            id="content"
            value={content}
            name="content"
            onChange={handleChange}
          />
        </div>
        <button disabled={isFormInvalid()} className={styles.button}>
          Submit
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </form>
    </>
  )
}

export default AddPost