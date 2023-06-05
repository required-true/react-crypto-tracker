import { useState, useEffect } from 'react'
import styled from 'styled-components'
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
  const [coins, setCoins] = useState<ICoin[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    ;(async () => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins').then(
        (res) => res.json(),
      )
      setCoins(response.slice(0, 30))
      setLoading(false)
    })()
  }, [])

  return (
    <>
      <PageTitle>Coins</PageTitle>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {coins.map((coin: ICoin) => (
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

export default Coins
