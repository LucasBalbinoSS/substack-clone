import './App.css'
import MainSection from './layouts/MainSection/MainSection'
import Menu from './layouts/Menu/Menu'
import MenuMobile from './layouts/MenuMobile/MenuMobile'
import Sidebar from './layouts/Sidebar/Sidebar'

function App() {
  return (
    <>
      <MenuMobile />
      <Menu />
      <MainSection />
      <Sidebar />
    </>
  )
}

export default App
