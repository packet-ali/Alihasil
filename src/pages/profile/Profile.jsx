import BottomNavbar from '../../components/navbar/BottomNavbar'
import { User, Mail, Phone, FileText, Edit2 } from 'lucide-react'

export default function Profile() {
  return (
    <div className='min-h-screen p-5 pb-24'>
      <h1 className='text-3xl font-bold text-gray-800 mb-6'>Profil Saya</h1>
      
      <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg border border-green-100 mb-6'>
        <div className='flex items-center gap-6'>
          <div className='w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-3xl shadow-lg'>
            👤
          </div>

          <div>
            <h2 className='text-2xl font-bold text-gray-800'>Ali User</h2>
            <p className='text-green-600 font-semibold mt-1'>✓ Nasabah Aktif</p>
            <p className='text-gray-500 text-sm mt-2'>Member sejak 2024</p>
          </div>
          
          <button className='ml-auto bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition'>
            <Edit2 size={20} />
          </button>
        </div>
      </div>

      <div className='bg-white rounded-3xl p-6 shadow-lg border border-gray-100'>
        <h3 className='font-bold text-lg text-gray-800 mb-6 flex items-center gap-2'>
          <FileText size={20} className='text-green-600' />
          Data Pengguna
        </h3>

        <div className='space-y-4'>
          <div className='relative'>
            <label className='text-xs font-semibold text-gray-600 uppercase tracking-wide'>Nama Lengkap</label>
            <div className='flex items-center mt-2 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200'>
              <User size={18} className='text-gray-400 mr-3' />
              <input className='w-full bg-transparent outline-none' placeholder='Nama Lengkap' />
            </div>
          </div>
          
          <div className='relative'>
            <label className='text-xs font-semibold text-gray-600 uppercase tracking-wide'>Email</label>
            <div className='flex items-center mt-2 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200'>
              <Mail size={18} className='text-gray-400 mr-3' />
              <input className='w-full bg-transparent outline-none' placeholder='Email' />
            </div>
          </div>
          
          <div className='relative'>
            <label className='text-xs font-semibold text-gray-600 uppercase tracking-wide'>Nomor HP</label>
            <div className='flex items-center mt-2 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200'>
              <Phone size={18} className='text-gray-400 mr-3' />
              <input className='w-full bg-transparent outline-none' placeholder='Nomor HP' />
            </div>
          </div>
          
          <div className='relative'>
            <label className='text-xs font-semibold text-gray-600 uppercase tracking-wide'>Nomor KTP</label>
            <div className='flex items-center mt-2 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200'>
              <FileText size={18} className='text-gray-400 mr-3' />
              <input className='w-full bg-transparent outline-none' placeholder='Nomor KTP' />
            </div>
          </div>
        </div>
        
        <button className='w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-2xl mt-6 hover:shadow-lg transition'>
          Simpan Perubahan
        </button>
      </div>

      <BottomNavbar />
    </div>
  )
}
