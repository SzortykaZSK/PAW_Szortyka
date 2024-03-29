import { Link } from 'react-router-dom'
import './HomePage.style.scss';

function HomePage() {

  return (
    <div className='mainContainer'>
      <h1>API app</h1>
      <p>Welcome to API app. Manage your data in database</p>
      <div>
        <Link to='/user'>Users</Link>
        <Link to='/profile'>Profiles</Link>
        <Link to='/post'>Posts</Link>
        <Link to='/comment'>Comments</Link>
        <Link to='/tag'>Tags</Link>
      </div>
    </div>
  )
}

export default HomePage
