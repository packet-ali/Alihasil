import { useState } from 'react'

export default function SetorSampah() {
  const [selectedWaste, setSelectedWaste] = useState('')
  const [selectedWeight, setSelectedWeight] = useState('')

  return (
    <div className='p-5 space-y-5'>
      <div className='bg-white p-5 rounded-3xl'>
        <h2 className='font-bold mb-4'>Jenis Sampah</h2>

        <div className='flex gap-3 flex-wrap'>
          {['Botol Plastik', 'Kardus', 'Kaleng'].map((item) => (
            <button
              key={item}
              onClick={() => setSelectedWaste(item)}
              className={`
                px-4 py-3 rounded-2xl border
                ${selectedWaste === item ? 'bg-green-600 text-white' : 'bg-white'}
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className='bg-white p-5 rounded-3xl'>
        <h2 className='font-bold mb-4'>Estimasi Berat</h2>

        <div className='flex gap-3'>
          {['<5kg', '5-10kg', '>10kg'].map((item) => (
            <button
              key={item}
              onClick={() => setSelectedWeight(item)}
              className={`
                px-4 py-3 rounded-2xl border
                ${selectedWeight === item ? 'bg-green-600 text-white' : 'bg-white'}
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
