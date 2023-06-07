import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { fetchCoins } from '../api'
import CoinListItem from '../components/CoinListItem'

export interface ICoin {
  id: string
  name: string
  symbol: string
  rank: number
  is_new: boolean
  is_active: boolean
  type: string
}

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>(['allCoins'], fetchCoins)

  return (
    <>
      <PageTitle>Coins</PageTitle>
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <ul>
          {data?.slice(0, 30).map((coin: ICoin) => (
            <CoinListItem key={coin.id} coin={coin} />
          ))}
        </ul>
      )}
    </>
  )
}

const PageTitle = styled.h2`
  padding: 20px 0 10px;
  font-weight: 700;
  font-size: 18px;
`

const Loading = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  font-weight: 700;
  font-size: 18px;
`

export default Coins
