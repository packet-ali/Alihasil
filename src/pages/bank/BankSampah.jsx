import { useState } from 'react'
import BottomNavbar from '../../components/navbar/BottomNavbar'
import { Search, MapPin, Clock, Phone, CheckCircle } from 'lucide-react'

const data = [
  {
    name: 'Bank Sampah Melati',
    address: 'Jl. Inhofftank',
    distance: '2.3 km',
    status: 'active',
    hours: '08:00 - 17:00',
    phone: '0812-3456-7890',
  },
  {
    name: 'Bank Sampah Tegalega',
    address: 'Jl. Tegalega',
    distance: '3.5 km',
    status: 'active',
    hours: '07:00 - 18:00',
    phone: '0823-4567-8901',
  },
]

export default function BankSampah() {
  const [search, setSearch] = useState('')

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='min-h-screen p-5 pb-24'>
      <h1 className='text-3xl font-bold text-gray-800 mb-2'>Bank Sampah Saya</h1>
      <p className='text-gray-500 mb-6'>Temukan lokasi bank sampah terdekat</p>

      <div className='relative mb-6'>
        <Search className='absolute left-4 top-3.5 text-gray-400' size={20} />
        <input
          type='text'
          placeholder='Cari Bank Sampah...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full p-4 pl-12 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
        />
      </div>

      <div className='space-y-4'>
        {filtered.length > 0 ? (
          filtered.map((bank, index) => (
            <div key={index} className='bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition border border-gray-100'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <div className='flex items-center gap-2'>
                    <h2 className='font-bold text-lg text-gray-800'>♻️ {bank.name}</h2>
                    {bank.status === 'active' && (
                      <CheckCircle size={20} className='text-green-600' />
                    )}
                  </div>
                </div>
              </div>

              <div className='space-y-3'>
                <div className='flex items-center gap-3 text-gray-600'>
                  <MapPin size={18} className='text-green-600 flex-shrink-0' />
                  <div>
                    <p className='text-sm text-gray-500'>Alamat</p>
                    <p className='font-medium'>{bank.address}</p>
                  </div>
                </div>

                <div className='flex items-center gap-3 text-gray-600'>
                  <Clock size={18} className='text-blue-600 flex-shrink-0' />
                  <div>
                    <p className='text-sm text-gray-500'>Jam Operasional</p>
                    <p className='font-medium'>{bank.hours}</p>
                  </div>
                </div>

                <div className='flex items-center gap-3 text-gray-600'>
                  <Phone size={18} className='text-purple-600 flex-shrink-0' />
                  <div>
                    <p className='text-sm text-gray-500'>Kontak</p>
                    <p className='font-medium'>{bank.phone}</p>
                  </div>
                </div>
              </div>

              <div className='mt-4 flex gap-2'>
                <div className='flex-1 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-xl text-center'>
                  <p className='text-xs text-gray-600'>Jarak</p>
                  <p className='font-bold text-green-600'>{bank.distance}</p>
                </div>
                <button className='flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition'>
                  Kunjungi
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className='text-center py-12'>
            <p className='text-gray-500 text-lg'>Tidak ada bank sampah yang ditemukan</p>
          </div>
        )}
      </div>

      <BottomNavbar />
    </div>
  )
}
