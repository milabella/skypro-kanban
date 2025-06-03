import { GlobalStyle } from './components/GlobalStyles'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import PopBrowse from './components/popups/PopBrowse'
import PopNewCard from './components/popups/PopNewCard'
import PopUser from './components/popups/PopUser'
import { AppWrapper } from './components/Main.styled'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <PopUser />

        <PopNewCard />
        <PopBrowse />

        {/* pop-up end */}

        <Header />
        <Main />
      </AppWrapper>

      <script src="js/script.js"></script>
    </>
  )
}

export default App
