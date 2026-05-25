import BalanceCard from '../../components/cards/BalanceCard'
import SaldoChart from '../../components/charts/SaldoChart'
import WasteChart from '../../components/charts/WasteChart'
import MarketplaceCard from '../../components/cards/MarketplaceCard'

export default function Dashboard() {
  return (
    <div className='p-5 space-y-5'>
      <BalanceCard />

      <div className='bg-white rounded-3xl p-4'>
        <h2 className='font-bold mb-4'>Grafik Saldo</h2>
        <SaldoChart />
      </div>

      <div className='bg-white rounded-3xl p-4'>
        <h2 className='font-bold mb-4'>Grafik Sampah</h2>
        <WasteChart />
      </div>

      <div>
        <h2 className='font-bold text-lg mb-3'>Marketplace</h2>

        <div className='grid grid-cols-2 gap-4'>
          <MarketplaceCard />
          <MarketplaceCard />
        </div>
      </div>
    </div>
  )
}
