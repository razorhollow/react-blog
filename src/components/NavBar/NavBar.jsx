import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <header className='App-header'>
        {user ?
        <nav>
          Welcome, {user.name}
          <Link to="/">Posts</Link>
          <Link to="/add">Add Post</Link>
          <Link to="" onClick={handleLogout}>LOG OUT</Link>
          <Link to="/changePassword">Change Password</Link>
          </nav>
        :
          <nav>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
        }
      </header>
    </>
  )
}

export default NavBar
