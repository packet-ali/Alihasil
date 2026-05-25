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

      <ResponsiveContainer width='100%' height={250}>
        <LineChart data={data}>
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Line type='monotone' dataKey='saldo' stroke='#16a34a' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
