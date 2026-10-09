import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col p-4 shrink-0 overflow-y-auto">
      {/*logo*/}
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="bg-fuchsia-600 text-white w-8 h-8 flex items-center justify-center rounded font-bold text-xl">
          M
        </div>
        <div className="flex flex-col">
          <b className="text-gray-800 text-sm leading-tight">MyPatientHUB</b>
          <small className="text-gray-500 text-xs">For better healthcare</small>
        </div>
      </div>

      {/* منو */}
      <nav className="flex flex-col gap-1 text-sm font-medium text-gray-600">
        <Link to="/" className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-md">
          <i className="fa-solid fa-table-columns w-5"></i> Dashboard
        </Link>
        <Link to="/appointments" className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-md">
          <i className="fa-solid fa-calendar-days w-5"></i> Appointments
        </Link>
        <Link to="/find-doctor" className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-md">
          <i className="fa-solid fa-user-doctor w-5"></i> Find Doctor
        </Link>
        <Link to="/find-clinic" className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-md">
          <i className="fa-solid fa-hospital w-5"></i> Find Clinic
        </Link>
        <NavLink to="/find-pharmacy" className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isActive ? "bg-purple-50 text-purple-600 font-semibold" 
          : "hover:bg-gray-50 text-gray-600" 
      }`
    }
  >
    <i className="fa-solid fa-house-medical w-5"></i> Find Pharmacy
  </NavLink>
        <Link to="/chat" className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-md">
          <i className="fa-solid fa-comments w-5"></i> Chat
        </Link>
        
        {/* آیتم فعال (Find Marketplace) */}
        <Link to="/find-marketplace" className="flex items-center gap-3 px-3 py-2.5 bg-fuchsia-50 text-fuchsia-600 rounded-md font-semibold">
          <i className="fa-solid fa-store w-5"></i> Find MarketPlace
        </Link>

        <Link to="/find-pharmacy" className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-md">
          <i className="fa-solid fa-pills w-5"></i> Find Pharmacy
        </Link>
        <Link to="/my-dependents" className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-md">
          <i className="fa-solid fa-clipboard-list w-5"></i> My Dependents
        </Link>
        <Link to="/my-account" className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-md">
          <i className="fa-solid fa-user-gear w-5"></i> My Account
        </Link>
        <Link to="/settings" className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-md">
          <i className="fa-solid fa-screwdriver-wrench w-5"></i> Settings
        </Link>
      </nav>

      {/* دکمه راهنما در پایین */}
      <div className="mt-auto pt-6 pb-2">
        <div className="bg-fuchsia-600 text-white w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer hover:bg-fuchsia-700 transition">
          <i className="fa-solid fa-question text-lg"></i>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;