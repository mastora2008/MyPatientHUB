import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shrink-0">
      {/* بخش چپ هدر (مسیر و عنوان) */}
      <div>
        <small className="text-gray-500 text-xs flex items-center gap-1 mb-1">
          <i className="fa-solid fa-house"></i> / Searchdoctor
        </small>
        <h3 className="font-bold text-gray-800 text-lg">Searchdoctor</h3>
      </div>

      {/* بخش راست هدر (جستجو و آیکون‌ها) */}
      <div className="flex items-center gap-6">
        {/* منوی همبرگری برای موبایل (اختیاری) */}
        <i className="fa-solid fa-bars text-gray-500 text-xl cursor-pointer md:hidden"></i>

        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-64">
          <i className="fa-solid fa-magnifying-glass text-gray-400 mr-2"></i>
          <input 
            type="search" 
            placeholder="Type here..." 
            className="bg-transparent border-none outline-none text-sm w-full text-gray-700"
          />
        </div>

        <a href="login.html" className="flex items-center gap-2 text-gray-600 hover:text-fuchsia-600 text-sm font-medium">
          <i className="fa-solid fa-circle-user text-lg"></i>
          Log out
        </a>

        <i className="fa-solid fa-gear text-gray-500 text-lg cursor-pointer hover:text-fuchsia-600"></i>
        <i className="fa-solid fa-bell text-gray-500 text-lg cursor-pointer hover:text-fuchsia-600"></i>
      </div>
    </header>
  );
};

export default Header;