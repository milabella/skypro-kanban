import { useEffect } from 'react'
import Column from './Column'
import { useState } from 'react'
import Loader from './Loader'
import { cardList, statuses } from './data'
import PopBrowse from './popups/PopBrowse'
import {
  MainDiv,
  MainBlock,
  MainContent,
  MainContainer,
} from './Main.styled.js'

function Main() {
  const [loading, setLoading] = useState(true)
  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const onCardClick = (card) => {
    setSelectedCard(card)
  }

  return (
    <MainDiv id="main">
      <div>
        {loading ? (
          <Loader />
        ) : (
          <MainContainer>
            <MainBlock>
              <MainContent>
                {statuses.map((status) => {
                  const cardForColumn = cardList.filter(
                    (card) => card.status === status,
                  )
                  return (
                    <Column
                      key={status}
                      title={status}
                      cards={cardForColumn}
                      onCardClick={onCardClick}
                    />
                  )
                })}
              </MainContent>
              {selectedCard && <PopBrowse card={selectedCard} />}
            </MainBlock>
          </MainContainer>
        )}
      </div>
    </MainDiv>
  )
}

export default Main
