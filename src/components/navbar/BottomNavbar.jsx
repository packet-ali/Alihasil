import { Link } from 'react-router-dom'
import { Home, Plus, Landmark, ReceiptText, User } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export default function BottomNavbar() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path
  
  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Beranda' },
    { path: '/setor', icon: Plus, label: 'Setor' },
    { path: '/bank', icon: Landmark, label: 'Bank' },
    { path: '/transaksi', icon: ReceiptText, label: 'Transaksi' },
    { path: '/profile', icon: User, label: 'Profil' },
  ]
  
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-2xl'>
      <div className='flex justify-around'>
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center py-4 px-3 transition-all ${
              isActive(path)
                ? 'text-green-600'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Icon size={24} className='mb-1' />
            <span className='text-xs font-semibold'>{label}</span>
            {isActive(path) && (
              <div className='w-1 h-1 bg-green-600 rounded-full mt-1'></div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
