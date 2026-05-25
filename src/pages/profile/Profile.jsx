import { useState } from 'react'

export default function Profile() {
  const [profile, setProfile] = useState({
    fullName: '',
    phone: '',
    email: '',
    ktp: ''
  })

  return (
    <div className='p-5 space-y-5'>
      <div className='bg-white p-5 rounded-3xl'>
        <h2 className='font-bold text-xl mb-4'>Data Pengguna</h2>

        <input
          type='text'
          placeholder='Nama Lengkap'
          className='w-full p-3 border rounded-xl mb-3'
        />

        <input
          type='text'
          placeholder='Nomor HP'
          className='w-full p-3 border rounded-xl mb-3'
        />

        <input
          type='email'
          placeholder='Email'
          className='w-full p-3 border rounded-xl mb-3'
        />

        <input
          type='text'
          placeholder='Nomor KTP'
          className='w-full p-3 border rounded-xl'
        />
      </div>
    </div>
  )
}
