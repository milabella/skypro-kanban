import { useState } from 'react'
import { HeaderButton, ExitButton } from './styles/Button.styled'
import { SLink, SLinkUser } from './styles/Link.styled'
import {
  HeaderStyled,
  HeaderBlock,
  Container,
  HeaderNav,
} from './styles/Header.styled'

function Header() {
  const [userName] = useState('Ivan Ivanov')
  const [userEmail] = useState('ivan.ivanov@gmail.com')
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  return (
    <HeaderStyled>
      <Container>
        <HeaderBlock>
          <div>
            <SLink href="" target="_self">
              <img
                src="images/logo.png"
                alt="logo"
                style={{ width: '85px' }}
              ></img>
            </SLink>
          </div>
          <div className="_dark">
            <SLink href="" target="_self">
              <img
                src="images/logo_dark.png"
                alt="logo"
                style={{ width: '85px' }}
              ></img>
            </SLink>
          </div>
          <HeaderNav>
            <HeaderButton id="btnMainNew">
              <SLink href="#popNewCard">Создать новую задачу</SLink>
            </HeaderButton>
            <SLinkUser href="#user-set-target" onClick={toggleModal}>
              {userName}
            </SLinkUser>
            {isModalOpen && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <p className="pop-user-set__name">{userName}</p>
                <p className="pop-user-set__mail">{userEmail}</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                    checked={isDarkTheme}
                    onChange={handleThemeToggle}
                  ></input>
                </div>
                <ExitButton type="button">
                  <SLink href="#popExit">Выйти</SLink>
                </ExitButton>
              </div>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderStyled>
  )
}

export default Header
