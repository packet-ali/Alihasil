import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#f6fff7] p-5'>
      <div className='bg-white w-full max-w-md rounded-3xl shadow-xl p-6'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-green-700'>ALIHASIL</h1>

          <p className='mt-2 text-gray-500'>
            Dari Tangan Kamu, Bumi Berterima Kasih.
          </p>
        </div>

        <form onSubmit={handleLogin} className='mt-6 space-y-4'>
          <input
            type='tel'
            placeholder='Nomor HP'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='w-full border rounded-2xl p-4'
          />

          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full border rounded-2xl p-4'
          />

          <button className='w-full bg-green-600 text-white rounded-2xl p-4'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
