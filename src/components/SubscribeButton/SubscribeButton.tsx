import { useState } from 'react'
import './styles.css'

interface SubscriptionButtonProps {
  section: string
  id: number
}

export default function SubscribeButton({ section, id }: SubscriptionButtonProps) {
  const [isChecked, setIsChecked] = useState(false)

  const inputId = `sub-btn-${section}-${id}`;

  return(
    <label className={`post-subscribe-button ${isChecked ? 'subscribed' : ''}`} htmlFor={inputId}>
      {isChecked ? 'Subscribed' : 'Subscribe'}
      <input type="checkbox" name={inputId} id={inputId} onChange={(e) => setIsChecked(e.target.checked)} />
    </label>
  )
}