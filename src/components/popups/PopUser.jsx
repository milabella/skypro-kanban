import { SLink } from '../Link.styled'
import { PopExitButton, PopExitNoButton } from '../Button.styled'

function PopUser() {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <PopExitButton id="exitYes">
                <SLink href="modal/signin.html">Да, выйти</SLink>{' '}
              </PopExitButton>
              <PopExitNoButton id="exitNo">
                <SLink href="#main">Нет, остаться</SLink>{' '}
              </PopExitNoButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PopUser
