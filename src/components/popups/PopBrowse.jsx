import Calendar from '../Calendar'
import { SLink } from '../styles/Link.styled'
import {
  BtnGroup,
  TaskStyledButton,
  BrowseStyledButtonClose,
  PTag,
} from '../styles/Popups.styled'

const PopBrowse = ({ card }) => {
  if (!card) return null

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{card.title}</h3>
              <div
                className={`categories__theme theme-top _${card.color} _active-category`}
              >
                <PTag $theme={card.color}>{card.topic}</PTag>
              </div>
            </div>
            <div style={{ marginBottom: '11px' }}>
              <p
                style={{
                  marginBottom: '14px',
                  color: '#000',
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '1',
                }}
              >
                Статус
              </p>
              <div className="status__themes">
                <div
                  className="status__theme"
                  style={{ background: '#94A6BE', color: '#FFFFFF' }}
                >
                  <p style={{ background: '#94A6BE', color: '#FFFFFF' }}>
                    {card.status}
                  </p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div
                className={`categories__theme theme-top _${card.color} _active-category`}
              >
                <PTag $theme={card.color}>{card.topic}</PTag>
              </div>
            </div>
            <div className="pop-browse__btn-browse">
              <BtnGroup>
                <TaskStyledButton>
                  <SLink href="#">Редактировать задачу</SLink>
                </TaskStyledButton>
                <TaskStyledButton>
                  <SLink href="#">Удалить задачу</SLink>
                </TaskStyledButton>
              </BtnGroup>
              <BrowseStyledButtonClose>
                <SLink href="#">Закрыть</SLink>
              </BrowseStyledButtonClose>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopBrowse
