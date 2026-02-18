import SubscribeButton from '../../components/SubscribeButton/SubscribeButton'
import UserVerificationIcon from '../../components/icons/UserVerificationIcon'
import './styles.css'

interface BestSellerProps {
  id: number
  avatar: string
  name: string
  author: string
  userVerification: boolean
}

export default function BestSeller({ id, avatar, name, author, userVerification }: BestSellerProps) {
  return(
    <li className="best-seller">
      <div className='best-seller-interno'>
      <span className='best-seller-id'>{id}</span>
        <img className='avatar' src={avatar} alt="Profile image" />
        <div className='best-seller-info'>
          <span className='best-seller-name'>
            {name}
            {userVerification && (
              <UserVerificationIcon />
            )}
          </span>
          <span className='best-seller-author'>{author}</span>
        </div>
      </div>
        <SubscribeButton section='best-seller' id={id} />
    </li>
  )
}