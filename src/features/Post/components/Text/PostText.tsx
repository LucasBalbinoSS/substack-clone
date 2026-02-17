import { useState } from 'react'
import './styles.css'

import BlockQuoteIcon from '../../../../components/icons/BlockQuoteIcon'
import SaveIcon from '../../../../components/icons/SaveIcon'

export default function Text({ ...props }) {
  const isBlockQuote = props.postContent.trim().startsWith('>')
  const [isSaved, setIsSaved] = useState(false)

  const handleSaveClick = () => {
    setIsSaved((prev) => !prev)
  }

  // se o texto iniciar com ">" terá estilização de quote, caso não, terá estilo normal.
  if (isBlockQuote) {
    return (
      <div className='post-blockquote'>
        <BlockQuoteIcon />
        <p>{props.postContent.replace('>', '').trim()}</p>
        <div className='blockquote-footer'>
          <span className='author'>
            {props.name}
          </span>
          <button onClick={handleSaveClick}>
            <SaveIcon size={18} fill={isSaved ? 'var(--brand-white)' : 'none'} stroke={isSaved ? 'var(--brand-white)' : 'currentColor'} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <p className="post-text">{props.postContent}</p>
  )
}