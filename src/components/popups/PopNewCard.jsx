import Calendar from '../Calendar'
import { NewCardButton } from '../Button.styled'
import { SLink } from '../Link.styled'
import { PTag } from '../Popups.styled'

function PopNewCard() {
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <SLink href="#" className="pop-new-card__close">
              &#10006;
            </SLink>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  ></input>
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <PTag style={{ background: '#FFE4C2', color: '#FF6D00' }}>
                    Web Design
                  </PTag>
                </div>
                <div className="categories__theme _green">
                  <PTag style={{ background: '#B4FDD1', color: '#06B16E' }}>
                    Research
                  </PTag>
                </div>
                <div className="categories__theme _purple">
                  <PTag style={{ background: '#E9D4FF', color: '#9A48F1' }}>
                    Copywriting
                  </PTag>
                </div>
              </div>
            </div>
            <NewCardButton id="btnCreate">Создать задачу</NewCardButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopNewCard
