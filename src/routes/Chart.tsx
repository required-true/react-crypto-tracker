import { useQuery } from '@tanstack/react-query'
import ApexCharts from 'react-apexcharts'
import { useOutletContext } from 'react-router-dom'
import { fetchCoinHistory } from '../api'

interface IHistorical {
  time_open: string
  time_close: string
  open: number
  high: number
  low: number
  close: number
  volume: number
  market_cap: number
}

interface ChartProps {
  coinId: string
}

function Chart() {
  const { coinId } = useOutletContext<ChartProps>()
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId),
  )
  console.log(data)

  return <div>{isLoading ? <div>Loading...</div> : <div>Fetched</div>}</div>
}

export default Chart
