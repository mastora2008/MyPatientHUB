import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import FindMarketplace from './FindMarketplace';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50 overflow-hidden">
        {/* سایدبار در سمت چپ */}
        <Sidebar />

        {/* بخش اصلی در سمت راست */}
        <div className="flex-1 flex flex-col h-screen">
          {/* هدر در بالای بخش اصلی */}
          <Header />

          {/* محتوای متغیر بر اساس آدرس */}
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/find-marketplace" element={<FindMarketplace />} />
              
              {/* مسیرهای موقت برای بقیه صفحات */}
              <Route path="/" element={<h1 className="text-2xl font-bold text-gray-800">صفحه داشبورد</h1>} />
              <Route path="/find-doctor" element={<h1 className="text-2xl font-bold text-gray-800">صفحه Find Doctor</h1>} />
              <Route path="/find-clinic" element={<h1 className="text-2xl font-bold text-gray-800">صفحه Find Clinic</h1>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;