import { useState } from "react";

function Header() {
  const [userName] = useState("Ivan Ivanov");
  const [userEmail] = useState("ivan.ivanov@gmail.com");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo"></img>
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo"></img>
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <a href="#user-set-target" className="header__user _hover02">
              Ivan Ivanov
            </a>
            <div
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
            >
              {/* <a href="">x</a> */}

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
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;