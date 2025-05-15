import { styled } from 'styled-components'

const cardTheme = {
  orange: {
    background: '#FFE4C2',
    color: '#FF6D00',
  },
  green: {
    background: '#B4FDD1',
    color: '#06B16E',
  },
  purple: {
    background: '#E9D4FF',
    color: '#9A48F1',
  },
  gray: {
    background: '#94A6BE',
    color: '#FFFFFF',
  },
}

export const SCard = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  background: ${({ $theme }) => cardTheme[$theme]?.background};
  color: ${({ $theme }) => cardTheme[$theme]?.color};
`
