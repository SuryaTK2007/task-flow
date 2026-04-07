# Taskflow - Project Management Application

A full-stack project management application built with React, Node.js, Express, and MongoDB.

## Features

- User authentication (signup/login)
- Protected routes
- Dashboard with statistics
- Project management (CRUD operations)
- Task management
- Team member management
- User profiles
- Responsive design with Tailwind CSS

## Tech Stack

### Frontend
- React
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt

## Setup Instructions

### Prerequisites
- Node.js or Bun installed
- MongoDB installed and running

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
bun install
```

3. Create `.env` file with:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskflow
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

4. Start the server:
```bash
bun run dev
```

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
bun install
```

3. Install additional dependencies:
```bash
bun add axios react-router-dom
```

4. Start the development server:
```bash
bun run dev
```

## Usage

1. Start MongoDB
2. Start the backend server (runs on port 5000)
3. Start the frontend (runs on port 5173 by default)
4. Open browser and navigate to `http://localhost:5173`
5. Sign up for a new account or login
6. Start managing your projects and tasks!

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project
- `GET /api/projects/:id` - Get project by ID
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create task
- `GET /api/tasks/:id` - Get task by ID
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Project Structure

```
sece-ai/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── utils/         # Utility functions (API calls)
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── src/
    │   ├── config/        # Configuration files
    │   ├── controllers/   # Route controllers
    │   ├── middleware/    # Custom middleware
    │   ├── models/        # Database models
    │   ├── routes/        # API routes
    │   └── server.js      # Entry point
    └── package.json
```

## License

MIT
