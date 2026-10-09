# MyPatientHUB

MyPatientHUB is a simple healthcare website project that includes a login page, a responsive healthcare dashboard, and dedicated pages for finding clinics and doctors.

The project provides a simple interface for users to access healthcare-related services such as appointments, doctors, clinics, pharmacies, chat, and marketplace services.

## Features

### Login Page

- Welcome message for users
- Email and password login form
- Facebook and Google login buttons
- "Remember me" checkbox
- Forgot password link
- Sign-up button
- Basic login form validation using JavaScript
- Email validation
- Password validation
- Login success message

### Dashboard

- MyPatientHUB logo and navigation sidebar
- Dashboard navigation menu
- Dashboard cards for:
  - Clinic promotions
  - Pharmacy promotions
  - Smart market usage
  - Health index
- Circular charts created using CSS
- Upcoming appointments section
- Search bar
- Logout option
- Settings and notification icons

### Find Clinic Page

- Dedicated HTML page for finding clinics
- New CSS styling for the clinic page
- Healthcare-focused interface for clinic-related information

### Find Doctor Page

- Dedicated HTML page for finding doctors
- New CSS styling for the doctor page
- Healthcare-focused interface for doctor-related information

### Responsive Design

The website is designed to work on:

- Desktop computers
- Laptops
- Tablets
- Mobile phones

CSS media queries are used to adjust the layout for different screen sizes. On smaller screens, the navigation and dashboard cards adapt to provide a mobile-friendly experience.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome

## Project Files

```text
MyPatientHUB/
│
├── login.html
├── dashboard.html
├── find-clinic.html
├── find-doctor.html
├── style.css
├── find-clinic.css
├── find-doctor.css
├── script.js
├── background img.jpeg
└── README.md
```
## How to Run the Project

1. Download or clone this project from the GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Open `login.html` in a web browser.
4. Enter an email and password to test the login validation.
5. Open `dashboard.html` to view the healthcare dashboard.
6. Open `find-clinic.html` to view the Find Clinic page.
7. Open `find-doctor.html` to view the Find Doctor page.

## Login Validation

JavaScript is used to validate the login form before it is submitted.

The validation checks:

- The email field is not empty.
- The email contains `@`.
- The password field is not empty.
- The password contains at least 6 characters.

If the information is valid, the user receives a login successful message.

## Responsive Layout

CSS media queries are used to make the website responsive across desktop computers, laptops, tablets, and mobile phones.

The layout changes at different screen sizes:

- **Desktop:** Full sidebar and two-column dashboard cards.
- **Tablet:** Smaller sidebar and adjusted dashboard card layout.
- **Mobile:** Top navigation, full-width content, and one-column cards.

The Find Clinic and Find Doctor pages also have their own CSS styling to support the website's layout and design across different screen sizes.

## Authors

- Husna Qadeer
- Arezo Ahmadi
- Mastora Sayeedy