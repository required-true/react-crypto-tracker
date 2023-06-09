import { useOutletContext } from 'react-router-dom'
import styled from 'styled-components'
import { PriceData } from './Coin'

interface PriceProps {
  tickersData: PriceData
}

function Price() {
  const { tickersData } = useOutletContext<PriceProps>()

  return (
    <PriceWrapepr>
      <Title>Price</Title>
      <Container>
        <ChangeLabel status={'up'}>
          현재가: {tickersData?.quotes?.USD?.price.toFixed(3)}
        </ChangeLabel>
        <ChangeLabel
          status={
            tickersData?.quotes?.USD?.percent_change_1h >= 0 ? 'up' : 'down'
          }
        >
          1시간 대비:{' '}
          <span>{tickersData?.quotes?.USD?.percent_change_1h}%</span>
        </ChangeLabel>
        <ChangeLabel
          status={
            tickersData?.quotes?.USD?.percent_change_6h >= 0 ? 'up' : 'down'
          }
        >
          6시간 대비:{' '}
          <span>{tickersData?.quotes?.USD?.percent_change_6h}%</span>
        </ChangeLabel>
        <ChangeLabel
          status={
            tickersData?.quotes?.USD?.percent_change_12h >= 0 ? 'up' : 'down'
          }
        >
          12시간 대비:{' '}
          <span>{tickersData?.quotes?.USD?.percent_change_12h}%</span>
        </ChangeLabel>
        <ChangeLabel
          status={
            tickersData?.quotes?.USD?.percent_change_24h >= 0 ? 'up' : 'down'
          }
        >
          24시간 대비:{' '}
          <span>{tickersData?.quotes?.USD?.percent_change_24h}%</span>
        </ChangeLabel>
      </Container>
    </PriceWrapepr>
  )
}

export default Price

const PriceWrapepr = styled.div``

const Title = styled.h3``

const Container = styled.ul``
const ChangeLabel = styled.li<{ status: string }>`
  padding: 20px;
  margin: 10px 0;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  background: ${(props) => props.theme.bgColor};
  text-align: center;

  & span {
    color: ${(props) => (props.status === 'down' ? 'blue' : 'red')};
  }
`
