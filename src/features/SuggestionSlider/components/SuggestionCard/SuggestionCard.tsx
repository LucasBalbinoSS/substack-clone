import { useState } from 'react'
import './styles.css'

import CloseIcon from '../../../../components/icons/CloseIcon'
import UserVerificationIcon from '../../../../components/icons/UserVerificationIcon'

interface SuggestionProps {
  id: number
  image?: string
  name: string
  description: string
  userVerification?: boolean
}

export default function SuggestionCard({image, name, description, userVerification }: SuggestionProps) {
  const [isFollowing, setIsFollowing] = useState(false)

  const handleFollowClick = () => {
    setIsFollowing((prev) => !prev)
  }

  return(
    <li className='suggestion-card'>
      <button className='suggestion-card-close-btn'>
        <CloseIcon />
      </button>
      <div className='suggestion-card-interno'>
        <span className="suggestion-card-info">
          <img className='suggestion-card-img' src={image} alt="" />
          <span className="suggestion-card-name-wrapper">
            <span className="suggestion-card-name">{name}</span>
            {
              userVerification && (
                <UserVerificationIcon size={11} />
              )
            }
          </span>
          <span className='suggestion-card-description'>{description}</span>
        </span>
        <button onClick={handleFollowClick} className={`suggestion-card-follow ${isFollowing ? 'following' : ''}`}>
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    </li>
  )
}