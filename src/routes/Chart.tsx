import { useQuery } from '@tanstack/react-query'
import ApexChart from 'react-apexcharts'
import { useOutletContext } from 'react-router-dom'
import { fetchCoinHistory } from '../api'
import { useRecoilValue } from 'recoil'
import { isDarkAtom } from '../atoms'

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
  const isDark = useRecoilValue(isDarkAtom)
  const { coinId } = useOutletContext<ChartProps>()
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId),
  )

  const exceptData = data ?? []
  const chartData = exceptData?.map((i) => {
    return {
      x: i.time_close,
      y: [i.open, i.high, i.low, i.close],
    }
  })

  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type="candlestick"
          series={[{ data: chartData }]}
          options={{
            theme: {
              mode: isDark ? 'dark' : 'light',
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            grid: { show: false },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: 'datetime',
              categories: data?.map((price) => price.time_close),
            },
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  )
}

export default Chart
