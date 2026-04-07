# Taskflow Backend

## Setup

1. Install dependencies:
```bash
bun install
```

2. Create a `.env` file with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskflow
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

3. Make sure MongoDB is running locally or update MONGODB_URI with your MongoDB connection string

4. Start the server:
```bash
bun run dev
```

## API Endpoints

### Authentication
- POST `/api/auth/signup` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/profile` - Get user profile (protected)

### Projects
- GET `/api/projects` - Get all projects (protected)
- POST `/api/projects` - Create project (protected)
- GET `/api/projects/:id` - Get project by ID (protected)
- PUT `/api/projects/:id` - Update project (protected)
- DELETE `/api/projects/:id` - Delete project (protected)

### Tasks
- GET `/api/tasks` - Get all tasks (protected)
- POST `/api/tasks` - Create task (protected)
- GET `/api/tasks/:id` - Get task by ID (protected)
- PUT `/api/tasks/:id` - Update task (protected)
- DELETE `/api/tasks/:id` - Delete task (protected)

### Users
- GET `/api/users` - Get all users (protected)
- GET `/api/users/:id` - Get user by ID (protected)
- PUT `/api/users/:id` - Update user (protected)
- DELETE `/api/users/:id` - Delete user (protected)
