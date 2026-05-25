import { Link } from 'react-router-dom'

export default function BottomNavbar() {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3'>
      <Link to='/dashboard'>Beranda</Link>
      <Link to='/setor'>Setor</Link>
      <Link to='/bank'>Bank</Link>
      <Link to='/transaksi'>Transaksi</Link>
      <Link to='/profile'>Profil</Link>
    </div>
  )
}
