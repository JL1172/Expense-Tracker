# Expense Tracker

Expense Tracker is a full-stack application designed to manage expenses efficiently, providing users with insightful financial analytics and controls. This README provides a technical breakdown of the project's backend and frontend components.

## Backend 🚀

The backend of Expense Tracker consists of a RESTful API built with Express.js. The database schema design and seeding are handled by Knex.js, with Postgres serving as the database management system, and pgAdmin for administrative tasks.

### Features and Technologies Used:

- **Authentication and Authorization:** Utilizes JWT (JSON Web Tokens) and bcrypt for robust authentication and authorization, ensuring secure access controls and inner controls.

- **Application Controls** Programmatically implemented application controls given upper and lower constraints based on moving averages of financial metrics associated with category.

- **Data Access and Manipulation:** Knex.js is employed for its powerful query building capabilities, facilitating complex joins across database tables. The API exposes various endpoints to serve data to the frontend.

- **Analytics and Controls:** Provides key insights into expense and financial activity analytics. Implements controls to monitor and manage any abnormal inputs, ensuring data integrity and application security.

## Frontend 🚀

The frontend of Expense Tracker is developed using React.js, styled-components, Material UI, and Bootstrap for responsive and visually appealing user interfaces. Recharts is utilized for generating graphs and charts to visualize financial data.

### Features and Technologies Used:

- **User Interface:** Utilizes React.js for building dynamic and interactive user interfaces, with styled-components and Material UI for styling and component design. Bootstrap is employed for responsive layout and design consistency.

- **Data Visualization:** Implements Recharts library to generate graphs and charts, providing users with visual representations of financial data for better analysis and decision-making.

- **Desktop Application:** Utilizes Electron to package the application as a desktop application, allowing users to access Expense Tracker seamlessly on desktop platforms.

## Overview

Expense Tracker is a meticulously crafted application born out of the creator's accounting background. With a focus on micro complexities and detailed project management, Expense Tracker offers a comprehensive solution for managing expenses and gaining valuable financial insights.

---
Crafted with ❤️ by JL1172
