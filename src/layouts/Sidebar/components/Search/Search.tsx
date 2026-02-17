import SearchIcon from "../../../../components/icons/SearchIcon"
import './styles.css'

export default function Search() {
  return(
    <div className="search">
      <span className="icon-wrapper">
        <SearchIcon />
      </span>
      <input type="text" name="search" id="search" placeholder="Search Substack" autoComplete="off" />
      <span className="keyboard-guide">⌘ K</span>
    </div>
  )
}