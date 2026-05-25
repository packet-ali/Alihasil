import { useState } from 'react'
import BottomNavbar from '../../components/navbar/BottomNavbar'

export default function SetorSampah() {
  const [selected, setSelected] = useState('')

  return (
    <div className='min-h-screen bg-[#f5f7f5] p-5 pb-24'>
      <h1 className='text-2xl font-bold'>Setor Sampah</h1>

      <div className='bg-white p-5 rounded-3xl shadow mt-5'>
        <h2 className='font-semibold mb-4'>Jenis Sampah</h2>

        <div className='grid grid-cols-2 gap-3'>
          {['Botol Plastik', 'Kardus', 'Kaleng', 'Kertas'].map((item) => (
            <button
              key={item}
              onClick={() => setSelected(item)}
              className={`p-4 rounded-2xl border ${
                selected === item
                  ? 'bg-green-600 text-white'
                  : 'bg-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <BottomNavbar />
    </div>
  )
}
