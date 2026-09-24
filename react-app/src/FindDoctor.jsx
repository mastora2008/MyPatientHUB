function FindDoctor() {
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

          <a className="active">
            <i className="fa-solid fa-user-doctor"></i>
            Find Doctor
          </a>

          <a href="find-clinic.html">
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


      <section className="dashboard-content">

        {/* Header */}
        <header>

          <div>
            <small>
              <i className="fa-solid fa-house"></i>
              / Searchdoctor
            </small>

            <h3>Searchdoctor</h3>
          </div>

          <i className="fa-solid fa-bars"></i>

          <div className="top">

            <div className="top-search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="search" placeholder="Type here..." />
            </div>

            <a href="login.html">
              <i className="fa-solid fa-circle-user"></i>
              Log out
            </a>

            <i className="fa-solid fa-gear"></i>
            <i className="fa-solid fa-bell"></i>

          </div>

        </header>


        {/* Find Doctor */}
        <section className="doctor-hero">

          <h1>Find a Doctor</h1>

          <p>
            Search Doctors and schedule an appointment
          </p>

          <div className="doctor-search">

            <input
              type="text"
              placeholder="Search a doctor by name, specialty"
            />

            <input
              type="text"
              placeholder="Zip Code or Neighborhood"
            />

            <button>Current</button>
            <button>Search</button>

          </div>

        </section>


        {/* Special Services */}
        <section className="special-services">

          <h2>Special Services</h2>

          <div className="services-grid">

            <article className="service-card">

              <div className="service-icon">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>

              <div>
                <h3>Primary Care and Internal MD</h3>
                <p>
                  Our doctors partner with you to help you reach your wellness goals.
                </p>
              </div>

              <i className="fa-solid fa-chevron-down"></i>

            </article>


            <article className="service-card">

              <div className="service-icon">
                <i className="fa-solid fa-stethoscope"></i>
              </div>

              <div>
                <h3>Emergency Care</h3>
                <p>
                  We provide emergency care for adults and children.
                </p>
              </div>

              <i className="fa-solid fa-chevron-down"></i>

            </article>


            <article className="service-card">

              <div className="service-icon">
                <i className="fa-solid fa-heart"></i>
              </div>

              <div>
                <h3>Imaging Services</h3>
                <p>
                  From X-ray to MRI scans, we offer imaging services.
                </p>
              </div>

              <i className="fa-solid fa-chevron-down"></i>

            </article>


            <article className="service-card">

              <div className="service-icon">
                <i className="fa-solid fa-kit-medical"></i>
              </div>

              <div>
                <h3>Urgent Care</h3>
                <p>
                  We offer urgent care for different health needs.
                </p>
              </div>

              <i className="fa-solid fa-chevron-down"></i>

            </article>

          </div>
        </section>


        {/* Specialties */}
        <section className="specialty-section">

          <h2>Find Doctors By Specialty</h2>

          <p>
            Select a specialty to view doctors and schedule an appointment.
          </p>

          <div className="specialty-grid">

            <div className="specialty-box">
              <span>Anesthesiology</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>

            <div className="specialty-box">
              <span>Dermatology</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>

            <div className="specialty-box">
              <span>Emergency Medicine</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>

            <div className="specialty-box">
              <span>Neurology</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>

            <div className="specialty-box">
              <span>Consultation</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>

            <div className="specialty-box">
              <span>Ophthalmology</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>

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

export default FindDoctor;