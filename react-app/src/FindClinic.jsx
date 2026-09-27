import { useState } from "react";

function FindClinic() {
  const [view, setView] = useState("map");
  const [mapType, setMapType] = useState("map");

  function handleViewChange(newView) {
    setView(newView);
  }

  function handleMapTypeChange(newType) {
    setMapType(newType);
  }

  return (
    <main className="dashboard">

      {/* Sidebar */}
      <aside>

        <div className="logo">
          <b>M</b>

          <span>
            MyPatientHUB<br />
            <small>For better healthcare</small>
          </span>
        </div>


        <nav>

          <a href="index.html">
            <i className="fa-solid fa-table-columns"></i>
            Dashboard
          </a>

          <a>
            <i className="fa-solid fa-calendar-days"></i>
            Appointments
          </a>

          <a href="find-doctor.html">
            <i className="fa-solid fa-user-doctor"></i>
            Find Doctor
          </a>

          <a className="active">
            <i className="fa-solid fa-hospital"></i>
            Find Clinic
          </a>

          <a>
            <i className="fa-solid fa-comments"></i>
            Chat
          </a>

          <a>
            <i className="fa-solid fa-store"></i>
            Find MarketPlace
          </a>

          <a>
            <i className="fa-solid fa-pills"></i>
            Find Pharmacy
          </a>

          <a>
            <i className="fa-solid fa-clipboard-list"></i>
            My Dependents
          </a>

          <a>
            <i className="fa-solid fa-user-gear"></i>
            My Account
          </a>

          <a>
            <i className="fa-solid fa-screwdriver-wrench"></i>
            Settings
          </a>

        </nav>


        <div className="help">
          <i className="fa-solid fa-question"></i>
        </div>

      </aside>


      {/* Main Content */}
      <section className="dashboard-content">


        {/* Header */}
        <header>

          <div>

            <small>
              <i className="fa-solid fa-house"></i>
              / Findhospital
            </small>

            <h3>Findhospital</h3>

          </div>


          <i className="fa-solid fa-bars"></i>


          <div className="top">

            <div className="top-search">

              <i className="fa-solid fa-magnifying-glass"></i>

              <input
                type="search"
                placeholder="Type here..."
              />

            </div>


            <a href="login.html">

              <i className="fa-solid fa-circle-user"></i>

              Log out

            </a>


            <i className="fa-solid fa-gear"></i>

            <i className="fa-solid fa-bell"></i>

          </div>

        </header>


        {/* Find Clinic */}
        <section className="clinic-hero">

          <h1>Find a Clinic</h1>

          <p>
            Search Clinics and schedule an appointment with doctors through Clinic
          </p>


          <div className="clinic-search">

            <input
              type="text"
              placeholder="Search"
            />

            <input
              type="text"
              placeholder="Zip Code or Neighborhood"
            />

            <button>
              Current
            </button>

            <button>
              Search
            </button>

          </div>

        </section>


        {/* Map and List Buttons */}
        <section className="view-options">

          <button
            className={view === "map" ? "view-active" : ""}
            onClick={() => handleViewChange("map")}
          >

            <i className="fa-solid fa-map-location-dot"></i>

            Map

          </button>


          <button
            className={view === "list" ? "view-active" : ""}
            onClick={() => handleViewChange("list")}
          >

            <i className="fa-solid fa-list"></i>

            List

          </button>

        </section>


        {/* Clinic Content */}
        <section className="clinic-content">{/* Filters */}
          <div className="clinic-sidebar">


            <div className="search-filters">

              <input
                type="text"
                placeholder="Primary Care"
              />

              <input
                type="text"
                placeholder="Zip code or Neighborhood"
              />

            </div>


            {/* Filter By */}
            <div className="filter-by">

              <h3>Filter By</h3>


              <select>

                <option>Specialty</option>
                <option>Primary Care</option>
                <option>Emergency Medicine</option>
                <option>Dermatology</option>
                <option>Neurology</option>

              </select>


              <select>

                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>

              </select>


              <select>

                <option>Condition</option>
                <option>Heart Disease</option>
                <option>Diabetes</option>
                <option>Blood Pressure</option>

              </select>


              <select>

                <option>Language</option>
                <option>English</option>
                <option>Persian</option>
                <option>Pashto</option>

              </select>

            </div>


            {/* Who They Treat */}
            <div className="checkbox-section">

              <h3>Provide who treat</h3>


              <label>

                <input
                  type="checkbox"
                  name="age"
                  value="all-ages"
                />

                All ages

              </label>


              <label>

                <input
                  type="checkbox"
                  name="age"
                  value="children"
                />

                Children

              </label>


              <label>

                <input
                  type="checkbox"
                  name="age"
                  value="adults"
                />

                Adults

              </label>

            </div>


            {/* View Only */}
            <div className="checkbox-section">

              <h3>View only</h3>


              <label>

                <input
                  type="checkbox"
                  name="view"
                  value="online-scheduling"
                />

                Online scheduling

              </label>


              <label>

                <input
                  type="checkbox"
                  name="view"
                  value="primary-care"
                />

                Primary care

              </label>

            </div>

          </div>


          {/* Map */}
          <div className="map-area">


            <div className="map-type">

              <button
                className={mapType === "map" ? "map-active" : ""}
                onClick={() => handleMapTypeChange("map")}
              >
                Map
              </button>


              <button
                className={mapType === "satellite" ? "map-active" : ""}
                onClick={() => handleMapTypeChange("satellite")}
              >
                Satellite
              </button>

            </div>


            <div id="map"></div>

          </div>

        </section>


        {/* Footer */}
        <footer>

          <p>
            © 2026, made with &hearts; by MyPatientHUB for a better web.
          </p>


          <div>

            <a>MyPatientHUB</a>

            <a>About Us</a>

            <a>Blog</a>

          </div>

        </footer>


      </section>

    </main>
  );
}

export default FindClinic;