export default function BalanceCard() {
  return (
    <div className='bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition relative overflow-hidden'>
      <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16'></div>
      <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12'></div>
      
      <div className='relative z-10'>
        <p className='text-sm font-semibold text-green-50 uppercase tracking-wide'>Koin Lestari Kamu</p>

        <h1 className='text-5xl font-bold mt-4'>🪙 15.000</h1>

        <div className='mt-6 flex justify-between items-end'>
          <div>
            <p className='text-green-50 text-sm'>Estimasi Rupiah</p>
            <p className='text-2xl font-bold mt-1'>Rp 15.000</p>
          </div>
          <div className='text-right'>
            <p className='text-green-50 text-sm'>Status</p>
            <p className='text-lg font-semibold mt-1'>✓ Aktif</p>
          </div>
        </div>
      </div>
    </div>
  )
}
