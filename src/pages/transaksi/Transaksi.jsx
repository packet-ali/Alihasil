import { useState } from 'react'

const data = [
  {
    type: 'pemasukan',
    title: 'Setor Plastik',
    amount: '+15000'
  },
  {
    type: 'pengeluaran',
    title: 'Belanja Produk',
    amount: '-5000'
  }
]

export default function Transaksi() {
  const [filter, setFilter] = useState('semua')

  const filteredData =
    filter === 'semua'
      ? data
      : data.filter((item) => item.type === filter)

  return (
    <div className='p-5'>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className='w-full p-3 rounded-2xl border mb-5'
      >
        <option value='semua'>Semua</option>
        <option value='pemasukan'>Pemasukan</option>
        <option value='pengeluaran'>Pengeluaran</option>
      </select>

      <div className='space-y-4'>
        {filteredData.map((item, index) => (
          <div key={index} className='bg-white p-5 rounded-3xl'>
            <h2>{item.title}</h2>
            <p>{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
