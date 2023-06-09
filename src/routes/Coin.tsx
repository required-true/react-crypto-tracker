import { useQuery } from '@tanstack/react-query'
import { NavLink, Outlet, useMatch, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { fetchCoinInfo, fetchCoinTickers } from '../api'

type RouteParams = {
  coinId: string
}

interface InfoData {
  id: string
  name: string
  symbol: string
  rank: number
  is_new: boolean
  is_active: boolean
  type: string
  description: string
  message: string
  open_source: boolean
  started_at: string
  development_status: string
  hardware_wallet: boolean
  proof_type: string
  org_structure: string
  hash_algorithm: string
  first_data_at: string
  last_data_at: string
}

export interface PriceData {
  id: string
  name: string
  symbol: string
  rank: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  beta_value: number
  first_data_at: string
  last_updated: string
  quotes: {
    USD: {
      ath_date: string
      ath_price: number
      market_cap: number
      market_cap_change_24h: number
      percent_change_1h: number
      percent_change_1y: number
      percent_change_6h: number
      percent_change_7d: number
      percent_change_12h: number
      percent_change_15m: number
      percent_change_24h: number
      percent_change_30d: number
      percent_change_30m: number
      percent_from_price_ath: number
      price: number
      volume_24h: number
      volume_24h_change_24h: number
    }
  }
}

function Coin() {
  const { coinId } = useParams() as RouteParams
  const chartMatched = !!useMatch('/:coinId/chart')
  const priceMatched = !!useMatch('/:coinId/price')

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ['info', coinId],
    () => fetchCoinInfo(coinId),
  )
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ['tickers', coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    },
  )

  const loading = infoLoading || tickersLoading

  return (
    <>
      <PageTitle>{coinId.toUpperCase()}</PageTitle>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : infoData ? (
        <InfoWarpper>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>${tickersData?.quotes?.USD?.price?.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
        </InfoWarpper>
      ) : (
        <InfoEmpy>There is no any data ...</InfoEmpy>
      )}

      <Tabs>
        <TabLink $isActive={chartMatched} to="chart">
          Chart
        </TabLink>
        <TabLink $isActive={priceMatched} to="price">
          Price
        </TabLink>
      </Tabs>
      <Outlet context={{ coinId, tickersData }} />
    </>
  )
}

export default Coin

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
`

const TabLink = styled(NavLink)<{ $isActive: boolean }>`
  display: inline-block;
  width: 45%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  line-height: 30px;
  text-align: center;
  color: ${(props) =>
    props.$isActive ? props.theme.accentColor : props.theme.textColor};
`

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

const InfoWarpper = styled.div``

const InfoEmpy = styled.div``

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  border-radius: 10px;
`

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;

  span {
    color: ${(props) => props.theme.textColor};
    &:first-child {
      font-size: 10px;
      font-weight: 400;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
  }
`
const Description = styled.p`
  margin: 20px 0px;
`
