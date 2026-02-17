import './styles.css'

import SeeAllButton from "../../components/SeeAllButton/SeeAllButton"
import SuggestionCard from './components/SuggestionCard/SuggestionCard'
import { SUGGESTION_DATA } from '../../data/data'

export default function SugestionSlider() {
  return(
    <div className="suggestion-slider">
      <div className="suggestion-slider-interno">
        <h2 className="suggestion-slider-tt">Suggestions</h2>
        <SeeAllButton />
      </div>
      <ul className='suggestion-slider-list'>
        {SUGGESTION_DATA.map((suggestion) => (
          <SuggestionCard
            id={suggestion.id}
            key={suggestion.id}
            image={suggestion.image}
            name={suggestion.name}
            description={suggestion.description}
            userVerification={suggestion.userVerification}
          />
        ))}
      </ul>
    </div>
  )
}