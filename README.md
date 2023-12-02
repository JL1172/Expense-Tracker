# Expense Tracker

Expense Tracker is a web application built using React, Express, Bcrypt, Jsonwebtoken, Styled Components, Postgres, Knex, PgAdmin4, Tailwind CSS, and Material-UI. It serves as an efficient tool for tracking and managing expenses, providing features for authentication, authorization, access controls, and a RESTful API for communication between the front end and the relational database.


## Features

- **Authentication**: Secure user authentication using Bcrypt and Jsonwebtoken.
- **Authorization**: Role-based access controls for different user roles.
- **Application Controls**: Efficient controls for managing expenses and categories.
- **Restricted Routes**: Certain routes are restricted based on user roles.
- **REST API**: A comprehensive RESTful API for communication between the front end and the database.

## Technologies Used

- React
- Express
- Bcrypt
- Jsonwebtoken
- Styled Components
- Postgres
- Knex
- PgAdmin4
- Tailwind CSS
- Material-UI

## Authentication and Authorization

The authentication system uses Bcrypt for password hashing and Jsonwebtoken for secure user sessions. Authorization is implemented using role-based access controls.

## API Endpoints

- **/api/expenses**: Manage expenses (CRUD operations).
- **/api/categories**: Manage expense categories (CRUD operations).
- **/api/auth**: User authentication and authorization.
- **/api/users**: User management (CRUD operations).

For detailed API documentation, refer to the [API Documentation]

## Database Schema

The database schema includes tables for users, expenses, categories, and user roles. 

## Contributing

Contributions are welcome! 

## License

This project is licensed under the [MIT License](LICENSE).

## Additional Information

### Customization

- **Styling**: Customize the styling by modifying the Tailwind CSS and Styled Components in the `client/src` directory.
- **Material-UI Components**: Modify or add Material-UI components in the `client/src/components` directory.
