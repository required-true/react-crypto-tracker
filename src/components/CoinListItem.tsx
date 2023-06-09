import { SyntheticEvent } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ICoin } from '../routes/Coins'

const onErrorImg = (event: SyntheticEvent<HTMLImageElement, Event>) => {
  event.currentTarget.src = '/images/no-img.png'
}

interface ICoinListItemProps {
  coin: ICoin
}

function CoinListItem({ coin }: ICoinListItemProps) {
  return (
    <Wrapper>
      <Container to={`/${coin.id}`}>
        <Image
          src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
          onError={onErrorImg}
        />
        <Title>{coin.name}</Title>
        <Rarr>&rarr;</Rarr>
      </Container>
    </Wrapper>
  )
}

export default CoinListItem

const Wrapper = styled.li`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  color: #222;
  background-color: ${(props) => props.theme.cardBgColor};
`

const Container = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  overflow: hidden;
  width: 35px;
  height: 35px;
  margin-right: 5px;
  border-radius: 50%;
`

const Title = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
`

const Rarr = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  color: ${(props) => props.theme.textColor};
  transform: translateY(-50%);
`
