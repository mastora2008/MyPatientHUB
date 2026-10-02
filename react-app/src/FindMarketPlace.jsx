import React from 'react';

// داده‌های نمونه برای کارت‌های بالای صفحه
const marketplaces = [
  {
    id: 1,
    title: 'Healthy Diet',
    price: '5 RM',
    seller: 'Food Panda',
    description: 'As Uber works through a huge amount of internal management turmoil.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
    logo: 'https://placehold.co/30x30/000000/FFFFFF?text=FP',
  },
  {
    id: 2,
    title: 'Healthy Diet',
    price: '10 RM',
    seller: 'Grab Food',
    description: 'Music is something that every person has his or her ing that every person has his or',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
    logo: 'https://placehold.co/30x30/00B14F/FFFFFF?text=GF',
  },
  {
    id: 3,
    title: 'Healthy Diet',
    price: '15 RM',
    seller: 'Deliveroo',
    description: 'Different people have different taste, and various types of music.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
    logo: 'https://placehold.co/30x30/00CCBC/FFFFFF?text=D',
  },
  {
    id: 4,
    title: 'Healthy Diet',
    price: '20 RM',
    seller: 'Minimalist',
    description: 'Different people have different taste, and various types of music.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
    logo: 'https://placehold.co/30x30/000000/FFFFFF?text=M',
  },
];

// داده‌های نمونه برای جدول پایین صفحه
const tableData = [
  {
    id: '243598234',
    name: 'Healthy Diet',
    category: 'Food',
    serviceBy: 'Food panda',
    discount: '0',
    price: '10 RM',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=50&q=80',
    logo: 'https://placehold.co/20x20/FF007F/FFFFFF?text=FP',
  },
];

const FindMarketplace = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      {/* ================= بخش بالایی: کارت‌ها ================= */}
      <div>
        <h1 className="text-xl font-bold text-gray-800 mb-6">
          Search Marketplaces and order what you need
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketplaces.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              
              <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-gray-600 text-sm font-medium">{item.title}</h3>
                  <span className="text-cyan-500 font-bold">{item.price}</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <img src={item.logo} alt={item.seller} className="w-6 h-6 rounded-full" />
                  <span className="font-bold text-gray-800 text-sm">{item.seller}</span>
                </div>

                <p className="text-xs text-gray-400 mb-4 flex-1 leading-relaxed">
                  {item.description}
                </p>

                <button className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-sm font-semibold py-2 px-4 rounded transition-colors mt-auto">
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= بخش پایینی: جدول ================= */}
<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mt-8">

  <h2 className="text-lg font-bold text-gray-800 mb-6">
    Other results for healthy diet search
  </h2>

  {/* Dropdown + Search */}
  <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">

    <div className="flex items-center text-sm text-gray-500">
      <select className="border border-gray-300 rounded-lg px-4 py-3 mr-2 outline-none focus:border-fuchsia-500 w-64">
        <option>7</option>
        <option>10</option>
        <option>20</option>
      </select>

      <span className="text-gray-400">
        entries per page
      </span>
    </div>

    <input
      type="text"
      placeholder="Search..."
      className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-fuchsia-500 w-full sm:w-64"
    />

  </div>

  {/* Table */}
  <div className="overflow-x-auto">

    <table className="w-full text-left">

      <thead>
        <tr className="border-b border-gray-200 text-xs text-gray-400 uppercase">

          <th className="px-4 py-4 font-semibold">
            Name
          </th>

          <th className="px-4 py-4 font-semibold">
            Category
          </th>

          <th className="px-4 py-4 font-semibold">
            Service By
          </th>

          <th className="px-4 py-4 font-semibold">
            Discount
          </th>

          <th className="px-4 py-4 font-semibold">
            Price
          </th>

          <th className="px-4 py-4 font-semibold">
            ID
          </th>

        </tr>
      </thead>

      <tbody>

        {tableData.map((row, index) => (

          <tr
            key={index}
            className="border-b border-gray-100 hover:bg-gray-50"
          >

            {/* NAME */}
            <td className="px-4 py-5">

              <div className="flex items-center gap-4">

                <img
                  src={row.image}
                  alt={row.name}
                  className="w-20 h-12 object-cover rounded"
                />

                <span className="text-gray-800 font-semibold">
                  {row.name}
                </span>

              </div>

            </td>

            {/* CATEGORY */}
            <td className="px-4 py-5 text-gray-500">
              {row.category}
            </td>

            {/* SERVICE BY */}
            <td className="px-4 py-5">

              <div className="flex items-center gap-4">

                <img
                  src={row.logo}
                  alt={row.serviceBy}
                  className="w-20 h-12 object-contain"
                />

                <span className="text-gray-800 font-semibold">
                  {row.serviceBy}
                </span>

              </div>

            </td>

            {/* DISCOUNT */}
            <td className="px-4 py-5 text-gray-500">
              {row.discount}
            </td>

            {/* PRICE */}
            <td className="px-4 py-5 text-gray-500">
              {row.price}
            </td>

            {/* ID */}
            <td className="px-4 py-5 text-gray-500">
              {row.id}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

  {/* Bottom text */}
  <div className="mt-6 text-gray-400 text-sm">
    Showing 1 to {tableData.length} of {tableData.length} entries
  </div>

</div>
</div>
      
  );
};

export default FindMarketplace