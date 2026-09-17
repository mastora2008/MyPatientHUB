
# MyPatientHUB

MyPatientHUB is a simple healthcare website project that includes a login page and a responsive healthcare dashboard.

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

### Responsive Design

The website is designed to work on:

- Desktop computers
- Laptops
- Tablets
- Mobile phones

On smaller screens, the sidebar changes into a mobile-friendly navigation area and the dashboard cards change to a single-column layout.

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
├── style.css
├── script.js
├── background img.jpeg
└── README.md
```

## How to Run the Project

1. Download or clone this project.
2. Open the project folder in Visual Studio Code.
3. Open `login.html` in a web browser.
4. Enter an email and password to test the login validation.
5. Open `dashboard.html` to view the healthcare dashboard.

## Login Validation

JavaScript is used to validate the login form before it is submitted.

The validation checks:

- The email field is not empty.
- The email contains `@`.
- The password field is not empty.
- The password contains at least 6 characters.

If the information is valid, the user receives a login successful message.

## Responsive Layout

CSS media queries are used to make the website responsive.

The layout changes at different screen sizes:

- **Desktop:** Full sidebar and two-column dashboard cards.
- **Tablet:** Smaller sidebar and one-column cards.
- **Mobile:** Top navigation, full-width content, and one-column cards.

## Authors

- Husna Qadeer
- Arezo Ahmadi
- Mastora Sayeedy