import React from 'react';

const medicineCards = [
  { id: 1, name: 'Esomephrazole', price: '10 RM', pharmacyName: 'Carry Medical', description: 'Carry Medical Provide Fresh and Excellent Quality Drugs' },
  { id: 2, name: 'Esomephrazole', price: '9 RM', pharmacyName: 'Pool Medical', description: 'High Quality is Our Strenght we provide good' },
  { id: 3, name: 'Esomephrazole', price: '8 RM', pharmacyName: 'OK Pharmacy', description: 'Different people have different taste, and various types of tablet.' },
  { id: 4, name: 'Esomephrazole', price: '11 RM', pharmacyName: 'Hamza Pharma', description: 'Different people have different taste, and various types of music' },
];

const medicineTableData = [
  { id: '8234', name: 'Esso', category: 'Tablet', serviceBy: 'Caring Pharmacy', discount: 1, price: '5 RM' },
  { id: '872', name: 'Esso', category: 'Tablet', serviceBy: 'OK Pharmacy', discount: 3, price: '9 RM' },
  { id: '0134', name: 'Esso', category: 'Tablet', serviceBy: 'Hilton Medical', discount: 5, price: '7 RM' },
  { id: '113', name: 'Esso', category: 'Tablet', serviceBy: 'Hinucion Pharma', discount: 5, price: '9 RM' },
  { id: '629', name: 'Esso', category: 'Tablet', serviceBy: 'Hamza Medical Pharmacy', discount: 7, price: '20 RM' },
  { id: '634729', name: 'Esso', category: 'Tablet', serviceBy: 'Food Panda', discount: 0, price: '20 RM' },
];

const FindPharmacy = () => {
  return (
    <div className="p-6 md:p-8 w-full max-w-7xl mx-auto font-sans">
      
      {/* بردکرامب */}
      <div className="mb-6 text-sm text-gray-500 flex gap-2">
        <span className="hover:text-gray-700 cursor-pointer">Home</span> 
        <span>/</span>
        <span className="text-gray-800 font-medium">Pharmacyplace</span>
      </div>

      {/* بخش کارت‌ها */}
      <div className="mb-12">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">Search Pharmacies for Medicines</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {medicineCards.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col h-full">
              
              {/* جعبه دارو (به جای عکس) */}
              <div className="relative flex items-center justify-center rounded-lg mb-4 h-40 bg-gradient-to-br from-indigo-950 via-indigo-800 to-purple-400 text-white overflow-hidden shadow-inner">
                <div className="absolute -left-8 top-5 h-20 w-64 rotate-[-15deg] rounded-full border-t-2 border-purple-200" />
                <div className="absolute -left-5 bottom-[-35px] h-24 w-64 rotate-[-15deg] rounded-full border-t-2 border-purple-200" />
                <div className="relative text-center">
                  <h3 className="font-bold italic text-2xl">ESSO 40</h3>
                  <p className="mt-1 text-[9px]">Esomeprazole, U.S.P 40mg</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-800 text-sm">{item.name}</h3>
                <span className="text-[#3b82f6] font-bold text-sm">{item.price}</span>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-gray-200 border border-gray-300"></div>
                <span className="text-sm font-medium text-gray-700">{item.pharmacyName}</span>
              </div>
              
              <p className="text-xs text-gray-500 mb-6 flex-grow leading-relaxed">{item.description}</p>
              
              <button className="w-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white py-2.5 rounded-md font-medium text-xs mt-auto hover:opacity-90 transition">
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* بخش جدول */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">6 Medicine returned for the keyword Esso</h2>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <select className="border border-gray-300 rounded px-3 py-1.5 bg-white text-sm outline-none">
              <option>7</option><option>10</option><option>20</option>
            </select>
            entries per page
          </div>
          <div>
            <input type="text" placeholder="Search..." className="border border-gray-300 rounded px-4 py-1.5 text-sm w-full sm:w-64 bg-white outline-none" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-200 text-[10px] text-gray-400 uppercase tracking-widest">
                <th className="pb-4 font-semibold">Name</th>
                <th className="pb-4 font-semibold">Category</th>
                <th className="pb-4 font-semibold">Service By</th>
                <th className="pb-4 font-semibold text-center">Discount</th>
                <th className="pb-4 font-semibold text-right">Price</th>
                <th className="pb-4 font-semibold text-right">ID</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {medicineTableData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition">
                  <td className="py-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-900 to-purple-500 flex items-center justify-center text-[6px] text-white font-bold italic">ESSO</div>
                    <span className="font-medium text-gray-800">{row.name}</span>
                  </td>
                  <td className="py-4 text-gray-500">{row.category}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded bg-gray-200 border border-gray-300"></div>
                      <span>{row.serviceBy}</span>
                    </div>
                  </td>
                  <td className="py-4 text-center">{row.discount}</td>
                  <td className="py-4 text-right font-medium text-gray-800">{row.price}</td>
                  <td className="py-4 text-right text-gray-500">{row.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-xs text-gray-400">Showing 1 to 7 of 6 entries</div>
      </div>

      {/* فوتر */}
      <footer className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 pb-10">
        <div>© 2026, made with ❤️ by MyPiHUB for a better web.</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-purple-600 cursor-pointer transition">MyPatientHUB</span>
          <span className="hover:text-purple-600 cursor-pointer transition">About Us</span>
          <span className="hover:text-purple-600 cursor-pointer transition">Blog</span>
        </div>
      </footer>
      
    </div>
  );
};

export default FindPharmacy;