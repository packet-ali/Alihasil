import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Sen', saldo: 4000 },
  { name: 'Sel', saldo: 7000 },
  { name: 'Rab', saldo: 5000 },
]

export default function SaldoChart() {
  return (
    <div className='bg-white p-4 rounded-3xl shadow'>
      <h2 className='font-semibold mb-4'>Grafik Saldo</h2>

      <ResponsiveContainer width='100%' height={350}>
        <LineChart data={data}>
          <XAxis dataKey='name' />

          <YAxis
            domain={[0, 100000]}
            ticks={[
              0,
              10000,
              20000,
              30000,
              40000,
              50000,
              60000,
              70000,
              80000,
              90000,
              100000,
            ]}
            tickFormatter={(value) =>
              value === 0
                ? '0'
                : new Intl.NumberFormat('id-ID').format(value)
            }
          />

          <Tooltip
            formatter={(value) =>
              `Rp ${new Intl.NumberFormat('id-ID').format(value)}`
            }
          />

          <Line
            type='monotone'
            dataKey='saldo'
            stroke='#16a34a'
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
