# ExpressJS CRUD API with TypeScript

This project is a backend server built using ExpressJS and TypeScript. It provides a set of CRUD interfaces to interact with a resource, using a database for data persistence.

## Features

- Create a user

- List users with basic filters

- Get details of a user

- Update user details

- Delete a user

## Technologies Used

- Node.js + Express.js for server

- TypeScript for type safety

- MongoDB

## Prerequisites

Before running this project, ensure you have installed:

- Node.js (>= 18.x)

- MongoDB (or use MongoDB Atlas)

## Installation

Clone the repository and install dependencies:

```
git clone https://github.com/NDH411929/code-challenge.git
cd code-challenge
npm install
```

## Configuration

Create a .env file in the root directory and set up environment variables:

```
PORT=3000
MONGO_URL="mongodb+srv://nguyenduchuy:04112003@huynguyen.4652t.mongodb.net/challenge-db"
```

## Running the Application

Locally

```
npm start
```

## API Endpoints

### 1. Create a User

`POST /users`

```
{
  "fullName": "Nguyen Van F",
  "address": "Ha Noi",
  "email": "nguyenvanf@gmail.com",
  "age": 22
}
```

### 2. List Users with Filters

`GET /users?sortField=age&sortValue=desc`

### 3. Get User Details

`GET /users/:id`

### 4. Update User Details

`PATCH /users/:id`

```
{
  "fullName": "Updated Resource Name"
}
```

### 5. Delete a Resource

`DELETE /users/:id`

## Project Structure

```
📂 code-challenge
├── 📂 src
│   ├── 📂 controllers  # Route handlers
│   ├── 📂 models       # Mongoose schemas
│   ├── 📂 routes       # Express routes
│   ├── 📂 services     # Business logic
│   ├── 📂 configs      # Configuration settings
├── index.ts            # Main server entry point
├── .env.example        # Environment variable example
├── tsconfig.json       # TypeScript config
└── package.json        # Dependencies & scripts
```
