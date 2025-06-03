import Card from './Card'
import { MainColumn, ColumnTitle } from './Column.styled'

const Column = ({ title, cards, onCardClick }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} {...card} card={card} onCardClick={onCardClick} />
        ))}
      </div>
    </MainColumn>
  )
}

export default Column
