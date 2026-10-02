import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import FindMarketPlace from "./FindMarketPlace";

import "./App.css";

function App() {
    return (
        <Router>
            <div className="app">
                <Sidebar />

                <div className="main-area">
                    <Header />

                    <main className="page-content">
                        <Routes>
                            <Route
                                path="/"
                                element={<h1>Dashboard</h1>}
                            />

                            <Route
                                path="/find-marketplace"
                                element={<FindMarketPlace />}
                            />

                            <Route
                                path="/find-doctor"
                                element={<h1>Find Doctor</h1>}
                            />

                            <Route
                                path="/find-clinic"
                                element={<h1>Find Clinic</h1>}
                            />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;