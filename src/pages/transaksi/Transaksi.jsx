import { useState } from 'react'
import BottomNavbar from '../../components/navbar/BottomNavbar'
import SaldoChart from '../../components/ui/SaldoChart'
import { TrendingUp, TrendingDown, Filter } from 'lucide-react'

const transaksi = [
  {
    type: 'Pemasukan',
    title: 'Setor Botol Plastik',
    amount: '+9000',
    date: '2024-01-15',
    icon: '🍾'
  },
  {
    type: 'Pengeluaran',
    title: 'Tarik Tunai',
    amount: '-5000',
    date: '2024-01-14',
    icon: '💳'
  },
]

export default function Transaksi() {
  const [filter, setFilter] = useState('Semua')

  const filtered =
    filter === 'Semua'
      ? transaksi
      : transaksi.filter((item) => item.type === filter)

  const pemasukan = transaksi.filter(t => t.type === 'Pemasukan').reduce((sum, t) => sum + parseInt(t.amount), 0)
  const pengeluaran = transaksi.filter(t => t.type === 'Pengeluaran').reduce((sum, t) => sum + Math.abs(parseInt(t.amount)), 0)

  return (
    <div className='min-h-screen p-5 pb-24'>
      <h1 className='text-3xl font-bold text-gray-800 mb-2'>Transaksi</h1>
      <p className='text-gray-500 mb-6'>Riwayat aktivitas Anda</p>

      <div className='grid grid-cols-2 gap-4 mb-6'>
        <div className='bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-2xl border border-green-200'>
          <div className='flex items-center gap-2 mb-2'>
            <TrendingUp size={20} className='text-green-600' />
            <p className='text-sm text-gray-600 font-semibold'>Pemasukan</p>
          </div>
          <p className='text-2xl font-bold text-green-600'>+Rp {pemasukan.toLocaleString('id-ID')}</p>
        </div>
        
        <div className='bg-gradient-to-br from-red-50 to-pink-50 p-5 rounded-2xl border border-red-200'>
          <div className='flex items-center gap-2 mb-2'>
            <TrendingDown size={20} className='text-red-600' />
            <p className='text-sm text-gray-600 font-semibold'>Pengeluaran</p>
          </div>
          <p className='text-2xl font-bold text-red-600'>-Rp {pengeluaran.toLocaleString('id-ID')}</p>
        </div>
      </div>

      <div className='mb-6'>
        <h2 className='text-lg font-bold text-gray-800 mb-3 flex items-center gap-2'>
          <Filter size={20} className='text-green-600' />
          Filter Transaksi
        </h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium'
        >
          <option>Semua</option>
          <option>Pemasukan</option>
          <option>Pengeluaran</option>
        </select>
      </div>

      <div className='mb-6'>
        <h2 className='text-lg font-bold text-gray-800 mb-4'>Grafik Aktivitas</h2>
        <SaldoChart />
      </div>

      <div className='space-y-3'>
        <h2 className='text-lg font-bold text-gray-800'>Riwayat Terbaru</h2>
        {filtered.map((item, index) => (
          <div key={index} className='bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition'>
            <div className='flex items-start justify-between'>
              <div className='flex items-start gap-4'>
                <div className='text-3xl pt-1'>{item.icon}</div>
                <div>
                  <h3 className='font-bold text-gray-800'>{item.title}</h3>
                  <p className='text-xs text-gray-500 mt-1'>{item.date}</p>
                </div>
              </div>
              <p className={`font-bold text-lg ${
                item.type === 'Pemasukan' 
                  ? 'text-green-600' 
                  : 'text-red-600'
              }`}>
                {item.amount}
              </p>
            </div>
          </div>
        ))}
      </div>

      <BottomNavbar />
    </div>
  )
}
