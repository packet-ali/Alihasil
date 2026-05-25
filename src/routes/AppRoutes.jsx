import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/dashboard/Dashboard'
import Profile from '../pages/profile/Profile'
import SetorSampah from '../pages/setor/SetorSampah'
import BankSampah from '../pages/bank/BankSampah'
import Transaksi from '../pages/transaksi/Transaksi'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/setor' element={<SetorSampah />} />
        <Route path='/bank' element={<BankSampah />} />
        <Route path='/transaksi' element={<Transaksi />} />
      </Routes>
    </BrowserRouter>
  )
}
