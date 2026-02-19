import Logo from '../../components/icons/Logo'
import NotificationIcon from '../../components/icons/NotivicationIcon'
import SearchIcon from '../../components/icons/SearchIcon'
import profilePicture from '../../assets/profile.webp'
import './styles.css'

export default function MenuMobile() {
  return (
    <section className='menu-mobile'>
      <div className='menu-mobile-interno'>
        <Logo size={24} />
        <span>Home</span>
      </div>
      <nav className='menu-mobile-interno-2'>
        <SearchIcon size={24} />
        <NotificationIcon />
        <img className='menu-mobile-profile-img' src={profilePicture} alt="User Profile picture" loading='eager' />
      </nav>
    </section>
  )
}