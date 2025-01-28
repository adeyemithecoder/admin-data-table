Admin Data Table - Scelloo Developer Assessment

Project Overview

This project is an admin data table built using Vue.js and Pinia for state management.
The table displays users of a paid service, allowing the administrator to filter, search, sort,
and update payment statuses.
The implementation follows the provided UI/UX Figma design and adheres to the outlined user stories.

Features

1. User Payment Status Tabs

Users are categorized into All, Paid, Unpaid, and Overdue tabs based on their payment status.

The Paid tab shows users who have completed their payment.

The Unpaid tab displays users who haven’t paid.

The Overdue tab contains users whose payments are past due.

The All tab includes all users regardless of status.

2. Total Payable Amount

The total sum of unpaid and overdue user amounts is displayed at the table header.

3. Search Functionality

A client-side search input allows filtering of users based on first name, last name, or email.

4. Expandable User Rows

Each row can be expanded to show additional user details.

5. Sorting

The table can be sorted by first name, last name, or email.

6. Mark Unpaid Users as Paid

Admins can mark users as "Paid" by selecting the checkbox and clicking the Pay Dues button.

Technologies Used

Vue.js - JavaScript framework for building the user interface.

Pinia - State management library for handling user data.

CSS - Styling for the components.

Mock Data - Fake user data stored in an array within Pinia.

Project Setup

Install Dependencies

npm install

Run the Project

npm run dev

Build for Production

npm run build

Folder Structure

├── src
│ ├── components # Reusable components (DataTable, Filters, etc.)
│ ├── pages # Main views (AdminDashboard.vue)
│ ├── store # Pinia store (userStore.js)
│ ├── assets # Static assets
│ ├── App.vue # Main app component
│ ├── main.js # App entry point
│
├── public # Public assets
├── package.json # Project dependencies and scripts
├── vite.config.js # Vite configuration

How to Use

Open the application.

Use the tabs to filter users by payment status.

Search users using the search bar.

Click on a user row to expand and view details.

Click on column headers to sort users.

Select unpaid users and click Pay Dues to mark them as paid.

Deployment

The project is live and accessible at:
Live Demo: https://admin-data-table-indol.vercel.app

Additional Notes

The UI/UX design followed is available on Figma.

This project is built strictly using Vue.js and Pinia, per the assessment requirements.

Developer Information
Mathew Adeyemi
Full Stack Developer | Nigerian
📧 Email: mathewadeyemi7654@gmail.com
📞 Phone: +234 810 977 4285
🔗 GitHub: https://github.com/adeyemithecoder
