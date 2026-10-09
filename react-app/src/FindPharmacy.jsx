import React, { useState } from 'react';
import Sidebar from './sidebar'; // مطمئن شوید مسیر ایمپورت درست است
import Navbar from './navbar';   // مطمئن شوید مسیر ایمپورت درست است

// داده‌های نمونه برای کارت‌ها (تصویر اول)
const medicineCards = [
  {
    id: 1,
    name: 'Esomephrazole',
    price: '10 RM',
    pharmacyName: 'Carry Medical',
    description: 'Carry Medical Provide Fresh and Excellent Quality Drugs',
    pharmacyLogo: 'https://via.placeholder.com/30', // لوگوی داروخانه را اینجا قرار دهید
    medicineImg: 'https://via.placeholder.com/150', // عکس دارو را اینجا قرار دهید
  },
  {
    id: 2,
    name: 'Esomephrazole',
    price: '9 RM',
    pharmacyName: 'Pool Medical',
    description: 'High Quality is Our Strenght we provide good',
    pharmacyLogo: 'https://via.placeholder.com/30',
    medicineImg: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Esomephrazole',
    price: '8 RM',
    pharmacyName: 'OK Pharmacy',
    description: 'Different people have different taste, and various types of tablet.',
    pharmacyLogo: 'https://via.placeholder.com/30',
    medicineImg: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Esomephrazole',
    price: '11 RM',
    pharmacyName: 'Hamza Pharma',
    description: 'Different people have different taste, and various types of music',
    pharmacyLogo: 'https://via.placeholder.com/30',
    medicineImg: 'https://via.placeholder.com/150',
  },
];

// داده‌های نمونه برای جدول (تصاویر دوم و سوم)
const medicineTableData = [
  { id: '8234', name: 'Esso', category: 'Tablet', serviceBy: 'Caring Pharmacy', discount: 1, price: '5 RM', logo: 'https://via.placeholder.com/30' },
  { id: '872', name: 'Esso', category: 'Tablet', serviceBy: 'OK Pharmacy', discount: 3, price: '9 RM', logo: 'https://via.placeholder.com/30' },
  { id: '0134', name: 'Esso', category: 'Tablet', serviceBy: 'Hilton Medical', discount: 5, price: '7 RM', logo: 'https://via.placeholder.com/30' },
  { id: '113', name: 'Esso', category: 'Tablet', serviceBy: 'Hinucion Pharma', discount: 5, price: '9 RM', logo: 'https://via.placeholder.com/30' },
  { id: '629', name: 'Esso', category: 'Tablet', serviceBy: 'Hamza Medical Pharmacy', discount: 7, price: '20 RM', logo: 'https://via.placeholder.com/30' },
  { id: '634729', name: 'Esso', category: 'Tablet', serviceBy: 'Food Panda', discount: 0, price: '20 RM', logo: 'https://via.placeholder.com/30' },
];

const FindPharmacy = () => {
  // استیت برای جابجایی بین حالت کارت و جدول
  const [viewMode, setViewMode] = useState('grid'); // 'grid' یا 'table'

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* سایدبار شما */}
      <Sidebar />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* نوبار شما */}
        <Navbar />

        {/* محتوای اصلی */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          
          {/* هدر صفحه */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500">
              <span className="hover:text-gray-700 cursor-pointer">Home</span> / <span className="text-gray-800 font-medium">Find Pharmacy</span>
            </div>
            
            {/* دکمه تغییر نما (برای تست هر دو طرح) */}
            <button 
              onClick={() => setViewMode(viewMode === 'grid' ? 'table' : 'grid')}
              className="bg-purple-100 text-purple-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-200 transition"
            >
              تغییر به نمای {viewMode === 'grid' ? 'جدول' : 'کارت'}
            </button>
          </div>

          {/* ==================== نمای کارت‌ها ==================== */}
          {viewMode === 'grid' && (
            <div>
              <h1 className="text-xl font-semibold text-gray-800 mb-6">Search Pharmacies for Medicines</h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {medicineCards.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col hover:shadow-md transition">
                    <div className="bg-gray-50 rounded-lg p-2 mb-4 flex justify-center items-center h-40">
                      <img src={item.medicineImg} alt={item.name} className="max-h-full object-contain" />
                    </div>
                    
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <span className="text-blue-500 font-bold">{item.price}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <img src={item.pharmacyLogo} alt="logo" className="w-6 h-6 rounded-full" />
                      <span className="text-sm font-medium text-gray-700">{item.pharmacyName}</span>
                    </div>
                    
                    <p className="text-xs text-gray-500 mb-4 flex-grow leading-relaxed">
                      {item.description}
                    </p>
                    
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-md font-medium text-sm hover:opacity-90 transition">
                      BUY NOW
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== نمای جدول ==================== */}
          {viewMode === 'table' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">6 Medicine returned for the keyword Esso</h2>
              
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <select className="border border-gray-300 rounded px-2 py-1 outline-none focus:border-purple-500">
                    <option>7</option>
                    <option>10</option>
                    <option>20</option>
                  </select>
                  entries per page
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="border border-gray-300 rounded px-3 py-1.5 text-sm outline-none focus:border-purple-500 w-full sm:w-64"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-xs text-gray-400 uppercase tracking-wider">
                      <th className="pb-3 font-medium">Name</th>
                      <th className="pb-3 font-medium">Category</th>
                      <th className="pb-3 font-medium">Service By</th>
                      <th className="pb-3 font-medium text-center">Discount</th>
                      <th className="pb-3 font-medium text-right">Price</th>
                      <th className="pb-3 font-medium text-right">ID</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    {medicineTableData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition">
                        <td className="py-4 flex items-center gap-3">
                          <img src="https://via.placeholder.com/30" alt="pill" className="w-8 h-8 rounded bg-purple-900 object-cover" />
                          <span className="font-medium">{row.name}</span>
                        </td>
                        <td className="py-4 text-gray-500">{row.category}</td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <img src={row.logo} alt="logo" className="w-6 h-6 rounded object-cover" />
                            <span>{row.serviceBy}</span>
                          </div>
                        </td>
                        <td className="py-4 text-center">{row.discount}</td>
                        <td className="py-4 text-right">{row.price}</td>
                        <td className="py-4 text-right text-gray-500">{row.id}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-sm text-gray-500">
                Showing 1 to 7 of 6 entries
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default FindPharmacy;