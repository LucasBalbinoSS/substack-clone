import {useState} from 'react'
import SaveIcon from '../../components/icons/SaveIcon'
import { formatSocialNumber } from '../../utils/formatters'

import './styles.css'


interface CardProps {
  profilePicture?: string
  name: string
  title: string
  image?: string
  readTime: string
  likes?: number
  comments?: number
}

export default function UpNextCard({ profilePicture, name, title, image, readTime, likes, comments }: CardProps) {
  const [isSaved, setIsSaved] = useState(false)

  const handleSaveClick = () => {
    setIsSaved((prev) => !prev)
  }

  return(
    <li className="card">
      <div className="card-header">
        <div className="card-header-interno">
          <span>{profilePicture}</span>
          <span className="card-name">{name}</span>
        </div>
        <button onClick={handleSaveClick}>
          <SaveIcon size={16} fill={isSaved ? 'var(--brand-white)' : 'none'} stroke={isSaved ? 'var(--brand-white)' : 'currentColor'} />
        </button>
      </div>
      <div className="card-main">
        <div className="card-main-interno">
          <p>{title}</p>
        <div className="card-info">
          <span>{readTime}</span>

          {likes && (
            <span>
              <span> ∙ </span>
              <span>{formatSocialNumber(likes)} likes</span>
            </span>
          )}

          {comments && (
            <span>
              <span> ∙ </span>
              <span>{formatSocialNumber(comments)} comments</span>
            </span>
          )}
        </div>
        </div>
        <img src={image} alt="" />
      </div>
    </li>
  )
}