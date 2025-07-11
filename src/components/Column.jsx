import Card from './Card'
import { MainColumn, ColumnTitle, ColumnCards } from './styles/Column.styled'

const Column = ({ title, cards, onCardClick }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <ColumnCards>
        {cards.map((card) => (
          <Card key={card.id} {...card} card={card} onCardClick={onCardClick} />
        ))}
      </ColumnCards>
    </MainColumn>
  )
}

export default Column
