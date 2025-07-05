import { styled } from 'styled-components'

export const SButton = styled.button`
  cursor: pointer;
  outline: none;
`

export const ExitButton = styled(SButton)`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
  &:hover a {
    color: #ffffff;
  }
`

export const BrowseButtonClose = styled(SButton)`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  &:hover {
    background-color: #33399b;
  }
  & a {
    color: #ffffff;
  }
  &:hover a {
    color: #ffffff;
  }
`

export const TaskButton = styled(BrowseButtonClose)`
  border: 0.7px solid var(--palette-navy-60, #565eef);
  background: transparent;
  color: #565eef;
  &:hover {
    color: #ffffff;
  }
  & a {
    color: #565eef;
  }
`

export const HeaderButton = styled(BrowseButtonClose)`
  width: 178px;
  height: 30px;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`

export const NewCardButton = styled(HeaderButton)`
  width: 132px;
  float: right;
  outline: none;

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`

export const PopExitButton = styled(HeaderButton)`
  width: 153px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-right: 10px;

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

export const PopExitNoButton = styled(PopExitButton)`
  background-color: transparent;
  border: 0.7px solid var(--palette-navy-60, #565eef);

  & a {
    width: 100%;
    height: 100%;
    color: #565eef;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover a {
    color: #ffffff;
  }
`
