import { useState } from 'react'
import './styles.css'
import { formatSocialNumber } from '../../utils/formatters'

import CommentsIcon from "../../components/icons/CommentsIcon"
import HeartIcon from "../../components/icons/HeartIcon"
import PostOptionsIcon from "../../components/icons/PostOptionsIcon"
import RestackIcon from "../../components/icons/RestackIcon"
import ShareIcon from "../../components/icons/ShareIcon"
import UserVerificationIcon from '../../components/icons/UserVerificationIcon'
import Text from './components/Text/PostText'
import SubscribeButton from '../../components/SubscribeButton/SubscribeButton'

interface UserProps {
  id: number
  name: string
  profilePhotoUrl: string
  postedAt: string
  postContent: string
  likesNumber: number
  commentsNumber: number
  restackNumber: number
  image?: string
  userVerification?: boolean
}

export default function Post({ id, name, profilePhotoUrl, postedAt, postContent, likesNumber, commentsNumber, restackNumber, image, userVerification }: UserProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isRestacked, setisRestacked] = useState(false)

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev)
  }

  const handleRestackClick = () => {
    setisRestacked((prev) => !prev)
  }

  return(
    <div className="post">
      <img className="profile-picture" src={profilePhotoUrl} alt={name + ' profile picture' } />
      <div className="post-interno">
        <div className="post-header">
          <div className='post-header-interno'>
              <div className="post-author">
                <span className="post-author-name-container">
                  <span className="post-author-name-wrapper">
                    <span className="post-author-name">{name}</span>
                    {userVerification && (
                      <UserVerificationIcon />
                    )}
                  </span>
                  <span className="post-meta-date">{postedAt}.</span>
                </span>
              </div>
          </div>
          <div className='post-header-interno-2'>
            <SubscribeButton section='main' id={id} />
            <PostOptionsIcon />
          </div>
        </div>
        <div className="post-main">
          <Text
            postContent={postContent}
            name={name}
          />
          {image && (
            <figure className='post-image-container'>
              <img src={image} alt="Post Image" />
            </figure>
          )}
        </div>
        <div className="post-footer">
          <button onClick={handleLikeClick} className={isLiked ? 'button-post-liked' : ''}>
            <HeartIcon fill={isLiked ? "#FE4850" : "none"} stroke={isLiked ? "transparent" : "currentColor"} />
            {formatSocialNumber(isLiked ? likesNumber + 1 : likesNumber)}
          </button>
          <button>
            <CommentsIcon />
            {formatSocialNumber(commentsNumber)}
          </button>
          <button 
            onClick={handleRestackClick} 
            className={isRestacked ? 'button-post-restacked' : 'button-post'}
          >
            <RestackIcon />
            {formatSocialNumber(isRestacked ? restackNumber + 1 : restackNumber)}
          </button>
          <button>
            <ShareIcon />
          </button>
        </div>
      </div>
    </div>
  )
}