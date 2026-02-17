import './styles.css'
import profilePicture from '../../assets/profile.jpg'
import PostList from './components/PostList/PostList'
import SugestionSlider from '../../features/SuggestionSlider/SuggetionSlider'

export default function MainSection() {
  return(
    <main className='main'>
      <button className='starter-button'>
        <img className='profile-picture' src={profilePicture} alt="User Profile picture" />
        What's on your mind?
      </button>
      <SugestionSlider />
      <PostList />
    </main>
  )
}