import { useState } from 'react'
import banks from '../../data/banks'

export default function BankSampah() {
  const [search, setSearch] = useState('')

  const filteredBanks = banks.filter((bank) =>
    bank.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='p-5'>
      <input
        type='text'
        placeholder='Cari Bank Sampah'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-full p-3 border rounded-2xl mb-5'
      />

      <div className='space-y-4'>
        {filteredBanks.map((bank) => (
          <div key={bank.id} className='bg-white p-5 rounded-3xl'>
            <h2 className='font-bold'>{bank.name}</h2>
            <p>{bank.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
