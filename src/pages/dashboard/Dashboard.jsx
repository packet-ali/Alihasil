import BottomNavbar from '../../components/navbar/BottomNavbar'
import BalanceCard from '../../components/cards/BalanceCard'
import SaldoChart from '../../components/ui/SaldoChart'

export default function Dashboard() {
  return (
    <div className='min-h-screen pb-24 p-5'>
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent'>ALIHASIL</h1>
          <p className='text-sm text-gray-500 mt-1'>Dari Tangan Kamu, Bumi Berterima Kasih</p>
        </div>

        <button className='bg-gradient-to-br from-green-600 to-green-700 text-white px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition font-medium flex items-center gap-2'>
          💬 Bantuan
        </button>
      </div>

      <div className='mt-8'>
        <BalanceCard />
      </div>

      <div className='mt-8'>
        <h2 className='text-lg font-bold text-gray-800 mb-4'>Aktivitas Terakhir</h2>
        <SaldoChart />
      </div>

      <BottomNavbar />
    </div>
  )
}
