const PostCard = (props) => {
  return (
<>
    <div className="card">
      <div className="card-body">
        <h2 className="card-text">{props.post.title}</h2>
        <p className="card-text">{props.post.content}</p>
      </div>
    </div>
</>

  )
}

export default PostCard