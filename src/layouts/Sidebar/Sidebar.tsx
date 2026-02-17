import Search from './components/Search/Search'
import SidebarCard from './components/SidebarCard/SidebarCard'
import './styles.css'

export default function Sidebar() {
  return(
    <article className='menu-suggestions'>
      <Search />
      <SidebarCard text='Up next' />
      <SidebarCard text='New Bestsellers' />
    </article>
  )
}