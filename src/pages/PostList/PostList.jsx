import PostCard from "../../components/PostCard/PostCard"
import styles from './PostList.module.css'

const PostList = (props) => {
  return (
    <>
      <h1>Posts</h1>
      <div className="styles.container">
        {props.posts.map(post => 
        <PostCard key={post._id}post={post}/>)}
      </div>
    </>
  )
}

export default PostList