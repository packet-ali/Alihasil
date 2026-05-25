import { useState } from 'react'
import BottomNavbar from '../../components/navbar/BottomNavbar'

const data = [
  {
    name: 'Bank Sampah Melati',
    address: 'Jl. Inhofftank',
  },
  {
    name: 'Bank Sampah Tegalega',
    address: 'Jl. Tegalega',
  },
]

export default function BankSampah() {
  const [search, setSearch] = useState('')

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='min-h-screen bg-[#f5f7f5] p-5 pb-24'>
      <h1 className='text-2xl font-bold'>Bank Sampah Saya</h1>

      <input
        type='text'
        placeholder='Cari Bank Sampah'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-full p-4 rounded-2xl border mt-5'
      />

      <div className='space-y-4 mt-5'>
        {filtered.map((bank, index) => (
          <div key={index} className='bg-white p-5 rounded-3xl shadow'>
            <h2 className='font-bold'>{bank.name}</h2>
            <p>{bank.address}</p>
          </div>
        ))}
      </div>

      <BottomNavbar />
    </div>
  )
}
