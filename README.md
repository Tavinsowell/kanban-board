# Kanban Board
Kanban Board is a web application designed to help teams manage their tasks and projects efficiently using the Kanban methodology. The application allows users to create, update, and track tasks across different stages of completion, such as "Todo", "In Progress", and "Done". It also includes user authentication to ensure secure access to the board.

## Features
- User Authentication: Secure login and registration using JWT tokens.
- Task Management: Create, update, and delete tasks with detailed descriptions.
- Kanban Board: Visualize tasks in different stages of completion.
- User Assignment: Assign tasks to different users.
- Responsive Design: Optimized for both desktop and mobile devices.

## Technologies Used
- Frontend:

  - React
  - TypeScript
  - Vite
  - React Router
  - CSS
- Backend:

  - Node.js
  - Express
  - Sequelize (ORM)
  - PostgreSQL
  - JWT for authentication
## Getting Started
Prerequisites
- Node.js
- PostgreSQL

## Installation
1. Clone the repository:

-  git clone https://github.com/Tavinsowell/kanban-board.git
-  cd Develop

2. Install dependencies for both client and server:

 - npm i
 - npm run install

3. Set up the PostgreSQL database:
 - psql -U postgres
 - CREATE DATABASE kanban_db;
4. Configure environment variables: Create a .env file in the server directory with the following content:

 - DB_NAME='kanban_db'
 - DB_USER='postgres'
 - DB_PASSWORD='yourpassword'
 - JWT_SECRET_KEY='yourjwtsecret'
 - ACCESS_TOKEN_SECRET='youraccesstokensecret'

5. Seed the database:
 - npm run seed


## Running the Application
1. Start the development server:
 - npm run start:dev


2. Open your browser and navigate to http://localhost:3000.



### Usage

 - Login: Use the login form to authenticate.
 - Create Task: Click on "New Ticket" to create a new task.
 - Edit Task: Click on a task to edit its details.
 - Delete Task: Click on the delete button to remove a task.
 - Move Task: Drag and drop tasks between columns to update their status.


