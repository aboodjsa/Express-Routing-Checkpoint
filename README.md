# Working Hours Web Application

An Express-based web application that displays different pages (Home, Our Services, Contact Us) but is only accessible during working hours (Monday to Friday, 9:00 to 17:00).

## Features

- Three pages: Home, Our Services, Contact Us
- Navigation bar with links to all pages
- Custom middleware to restrict access to working hours
- Responsive CSS styling
- EJS template engine for dynamic views

## Tech Stack

- **Backend:** Node.js, Express
- **Templating:** EJS
- **Styling:** CSS

## Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd Advanced-Back-End-Development-Express-Routing-
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser at `http://localhost:3000`

## Usage

The application is only available during working hours:
- **Days:** Monday to Friday
- **Time:** 9:00 to 17:00

If you try to access the site outside of these hours, you'll see an availability notice.

## Folder Structure

```
├── middleware/
│   └── workingHours.js    # Custom middleware to check time
├── public/
│   └── css/
│       └── style.css      # Application styles
├── routes/
│   └── pages.js           # Route definitions
├── views/
│   ├── partials/
│   │   ├── header.ejs     # Shared header template
│   │   └── footer.ejs     # Shared footer template
│   ├── home.ejs           # Home page
│   ├── services.ejs       # Services page
│   └── contact.ejs        # Contact page
├── server.js              # Application entry point
├── package.json
└── README.md
```
