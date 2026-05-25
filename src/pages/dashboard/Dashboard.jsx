import BottomNavbar from '../../components/navbar/BottomNavbar'
import BalanceCard from '../../components/cards/BalanceCard'
import SaldoChart from '../../components/charts/SaldoChart'

export default function Dashboard() {
  return (
    <div className='min-h-screen bg-[#f5f7f5] pb-24 p-5'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold text-green-700'>ALIHASIL</h1>

        <button className='bg-white shadow px-4 py-2 rounded-xl'>
          💬 CS
        </button>
      </div>

      <div className='mt-5'>
        <BalanceCard />
      </div>

      <div className='mt-5'>
        <SaldoChart />
      </div>

      <BottomNavbar />
    </div>
  )
}
