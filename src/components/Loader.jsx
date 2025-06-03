import { LoaderDiv } from './Card.styled'

const Loader = ({ width = 100 }) => {
  return (
    <LoaderDiv className="loader" style={{ width: width + '%' }}>
      Данные загружаются...
    </LoaderDiv>
  )
}

export default Loader
