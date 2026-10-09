import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import FindPharmacy from './FindPharmacy'; // 👈 دقت کن F و P بزرگ باشه

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-[#f8f9fa] overflow-hidden">
        {/* سایدبار سمت چپ */}
        <Sidebar />
        
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          {/* هدر بالای صفحه */}
          <Header />
          
          {/* محتوای اصلی (فقط این بخش اسکرول میشه) */}
          <div className="flex-1 overflow-y-auto">
            <Routes>
              {/* 👈 مسیر دقیقاً باید همین باشه */}
              <Route path="/find-pharmacy" element={<FindPharmacy />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;