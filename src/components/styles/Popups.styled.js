import { styled } from 'styled-components'
import { TaskButton, BrowseButtonClose } from './Button.styled'
import { cardTheme } from './Card.styled'

export const PTag = styled.p`
  background-color: ${({ $theme }) => cardTheme[$theme]?.background};
  color: ${({ $theme }) => cardTheme[$theme]?.color};
  padding: 5px 14px;
  border-radius: 18px;
  font-size: 10px;
  font-weight: 600;
  font-family: 'Roboto', Arial, sans-serif;
  display: inline-block;
`

export const BtnGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const TaskStyledButton = styled(TaskButton)`
  height: 30px;
  margin-bottom: 10px;
  margin-right: 8px;
  padding: 0 14px;
`

export const BrowseStyledButtonClose = styled(BrowseButtonClose)`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
`
