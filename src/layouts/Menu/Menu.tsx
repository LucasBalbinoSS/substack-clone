import './styles.css'

import profilePicture from '../../assets/profile.jpg'
import ActivityIcon from '../../components/icons/ActivityIcon'
import ChatIcon from '../../components/icons/ChatIcon'
import DashboardIcon from '../../components/icons/DashboardIcon'
import ExploreIcon from '../../components/icons/ExploreIcon'
import HomeIcon from '../../components/icons/HomeIcon'
import Logo from '../../components/icons/Logo'
import SubscriptionIcon from '../../components/icons/SubscriptionIcon'
import MoreIcon from '../../components/icons/MoreIcon'

export default function Menu() {
  return (
    <article className="menu">
      <nav className="nav" aria-label="Main navigation">
        <ul className="list">
          <li className="list-item logo-item">
            <span className='logo-container'>
              <Logo />
            </span>
          </li>
          <li className="list-item home-item">
            <HomeIcon />
            Home
          </li>
          <li className="list-item subscriptions-item">
            <SubscriptionIcon />
            Subscriptions
          </li>
          <li className="list-item chat-item">
            <ChatIcon />
            Chat
          </li>
          <li className="list-item activity-item">
            <ActivityIcon />
            Activity
          </li>
          <li className="list-item explore-item">
            <ExploreIcon />
            Explore
          </li>
          <li className="list-item dashboard-item">
          <DashboardIcon />
            Dashboard
          </li>
          <li className="list-item profile-item">
            <img className='profile-img' src={profilePicture} alt="User Profile picture" />
            Profile
          </li>
          <li className="list-item create-item">
            <button className="menu-button">
              Create &#9662;
            </button>
          </li>
        </ul>
      </nav>
      <button className='list-item more-item'>
        <MoreIcon />
        More
      </button>
    </article>
  )
}