import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="logo-area">

                <div className="logo-box">
                    M
                </div>

                <div className="logo-text">
                    <b>MyPatientHUB</b>
                    <small>For better healthcare</small>
                </div>

            </div>


            <nav className="sidebar-menu">

                <Link to="/" className="sidebar-link">
                    <i className="fa-solid fa-table-columns"></i>
                    <span>Dashboard</span>
                </Link>

                <Link to="/appointments" className="sidebar-link">
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>Appointments</span>
                </Link>

                <Link to="/find-doctor" className="sidebar-link">
                    <i className="fa-solid fa-user-doctor"></i>
                    <span>Find Doctor</span>
                </Link>

                <Link to="/find-clinic" className="sidebar-link">
                    <i className="fa-solid fa-hospital"></i>
                    <span>Find Clinic</span>
                </Link>

                <Link to="/chat" className="sidebar-link">
                    <i className="fa-solid fa-comments"></i>
                    <span>Chat</span>
                </Link>

                <Link
                    to="/find-marketplace"
                    className="sidebar-link active"
                >
                    <i className="fa-solid fa-store"></i>
                    <span>Find MarketPlace</span>
                </Link>

                <Link to="/find-pharmacy" className="sidebar-link">
                    <i className="fa-solid fa-pills"></i>
                    <span>Find Pharmacy</span>
                </Link>

                <Link to="/my-dependents" className="sidebar-link">
                    <i className="fa-solid fa-clipboard-list"></i>
                    <span>My Dependents</span>
                </Link>

                <Link to="/my-account" className="sidebar-link">
                    <i className="fa-solid fa-user-gear"></i>
                    <span>My Account</span>
                </Link>

                <Link to="/settings" className="sidebar-link">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                    <span>Settings</span>
                </Link>

            </nav>


            <div className="help-section">

                <div className="help-button">
                    <i className="fa-solid fa-question"></i>
                </div>

            </div>

        </aside>
    );
}

export default Sidebar;