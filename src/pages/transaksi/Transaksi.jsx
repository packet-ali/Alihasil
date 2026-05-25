import { useState } from 'react'
import BottomNavbar from '../../components/navbar/BottomNavbar'
import SaldoChart from '../../components/charts/SaldoChart'

const transaksi = [
  {
    type: 'Pemasukan',
    title: 'Setor Botol Plastik',
    amount: '+9000',
  },
  {
    type: 'Pengeluaran',
    title: 'Tarik Tunai',
    amount: '-5000',
  },
]

export default function Transaksi() {
  const [filter, setFilter] = useState('Semua')

  const filtered =
    filter === 'Semua'
      ? transaksi
      : transaksi.filter((item) => item.type === filter)

  return (
    <div className='min-h-screen bg-[#f5f7f5] p-5 pb-24'>
      <h1 className='text-2xl font-bold'>Transaksi</h1>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className='w-full mt-5 p-4 rounded-2xl border'
      >
        <option>Semua</option>
        <option>Pemasukan</option>
        <option>Pengeluaran</option>
      </select>

      <div className='mt-5'>
        <SaldoChart />
      </div>

      <div className='space-y-4 mt-5'>
        {filtered.map((item, index) => (
          <div key={index} className='bg-white rounded-2xl p-4 shadow'>
            <h2 className='font-semibold'>{item.title}</h2>
            <p>{item.amount}</p>
          </div>
        ))}
      </div>

      <BottomNavbar />
    </div>
  )
}
