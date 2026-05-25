import BottomNavbar from '../../components/navbar/BottomNavbar'

export default function Profile() {
  return (
    <div className='min-h-screen bg-[#f5f7f5] p-5 pb-24'>
      <div className='bg-white rounded-3xl p-5 shadow'>
        <div className='flex items-center gap-4'>
          <div className='w-20 h-20 rounded-full bg-green-200'></div>

          <div>
            <h1 className='text-xl font-bold'>Ali User</h1>
            <p className='text-gray-500'>Nasabah Aktif</p>
          </div>
        </div>
      </div>

      <div className='bg-white rounded-3xl p-5 shadow mt-5'>
        <h2 className='font-semibold mb-4'>Data Pengguna</h2>

        <div className='space-y-3'>
          <input className='w-full border p-3 rounded-xl' placeholder='Nama Lengkap' />
          <input className='w-full border p-3 rounded-xl' placeholder='Email' />
          <input className='w-full border p-3 rounded-xl' placeholder='Nomor HP' />
          <input className='w-full border p-3 rounded-xl' placeholder='Nomor KTP' />
        </div>
      </div>

      <BottomNavbar />
    </div>
  )
}
