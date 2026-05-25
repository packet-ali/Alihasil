import { useState } from 'react'
import { registerUser } from '../../services/authService'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('nasabah')

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      await registerUser(email, password, role)
      alert('Akun berhasil dibuat')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className='p-5'>
      <form onSubmit={handleRegister} className='space-y-4'>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full p-3 rounded-xl border'
        />

        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full p-3 rounded-xl border'
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className='w-full p-3 rounded-xl border'
        >
          <option value='nasabah'>Nasabah</option>
          <option value='admin'>Admin</option>
        </select>

        <button className='bg-green-600 text-white w-full p-3 rounded-xl'>
          Daftar
        </button>
      </form>
    </div>
  )
}
