import { useState } from 'react'
import BottomNavbar from '../../components/navbar/BottomNavbar'
import { Plus, X } from 'lucide-react'

const wasteTypes = [
  { name: 'Botol Plastik', icon: '🍾', color: 'from-blue-500 to-cyan-500' },
  { name: 'Kardus', icon: '📦', color: 'from-amber-500 to-orange-500' },
  { name: 'Kaleng', icon: '🥫', color: 'from-red-500 to-pink-500' },
  { name: 'Kertas', icon: '📄', color: 'from-gray-500 to-slate-500' },
]

export default function SetorSampah() {
  const [selected, setSelected] = useState([])
  const [quantity, setQuantity] = useState({})

  const toggleWaste = (item) => {
    setSelected(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    )
  }

  const updateQuantity = (item, value) => {
    setQuantity(prev => ({ ...prev, [item]: value }))
  }

  return (
    <div className='min-h-screen p-5 pb-24'>
      <h1 className='text-3xl font-bold text-gray-800 mb-2'>Setor Sampah</h1>
      <p className='text-gray-500 mb-8'>Pilih jenis sampah yang ingin Anda setor</p>

      <div className='bg-white rounded-3xl p-6 shadow-lg border border-gray-100 mb-6'>
        <h2 className='font-bold text-lg text-gray-800 mb-6'>Pilih Jenis Sampah</h2>

        <div className='grid grid-cols-2 gap-4'>
          {wasteTypes.map(({ name, icon, color }) => (
            <button
              key={name}
              onClick={() => toggleWaste(name)}
              className={`p-6 rounded-2xl transition-all ${
                selected.includes(name)
                  ? `bg-gradient-to-br ${color} text-white shadow-lg scale-105`
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <div className='text-3xl mb-2'>{icon}</div>
              <p className={`font-bold text-sm ${
                selected.includes(name) ? 'text-white' : 'text-gray-800'
              }`}>
                {name}
              </p>
            </button>
          ))}
        </div>
      </div>

      {selected.length > 0 && (
        <div className='bg-white rounded-3xl p-6 shadow-lg border border-gray-100 mb-6'>
          <h2 className='font-bold text-lg text-gray-800 mb-6'>Masukkan Jumlah</h2>
          
          <div className='space-y-4'>
            {selected.map(item => {
              const waste = wasteTypes.find(w => w.name === item)
              return (
                <div key={item} className='flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-200'>
                  <div className='flex items-center gap-3'>
                    <span className='text-2xl'>{waste.icon}</span>
                    <p className='font-semibold text-gray-800'>{item}</p>
                  </div>
                  <div className='flex items-center gap-3 bg-white rounded-xl border border-gray-200'>
                    <button 
                      onClick={() => updateQuantity(item, Math.max(0, (quantity[item] || 0) - 1))}
                      className='p-2 hover:bg-gray-100 transition'
                    >
                      <X size={18} />
                    </button>
                    <span className='w-8 text-center font-bold'>{quantity[item] || 0}</span>
                    <button 
                      onClick={() => updateQuantity(item, (quantity[item] || 0) + 1)}
                      className='p-2 hover:bg-gray-100 transition'
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <button className='w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 rounded-2xl mt-6 hover:shadow-lg transition text-lg'>
            Setor Sekarang
          </button>
        </div>
      )}

      <BottomNavbar />
    </div>
  )
}
