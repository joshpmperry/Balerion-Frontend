# Balerion-Frontend

Requirements

Admin Role:
  - Admins can view all cards, whether created by users or admins.
  - Cards in the admin view are sorted by the latest creation date (newest first).
  - Admins can create new cards, automatically assigned a unique identifier running number in the format: ADMIN-[number].
  - After creating a card, a new tag is added to the card.
User Role:
  - Users can only view the cards they created.
  - Cards in the user view are sorted by the oldest creation date (oldest first).
  - Users can create new cards, automatically assigned a unique identifier running number in the format: MEMO-[number].
  - After creating a card, a new tag is added to the card.


## System Architecture

### Tech Stack
- **MongoDB**: Document database for storing user and memo data
- **Express.js**: Backend RESTful API framework
- **React**: Frontend UI library
- **Node.js**: Runtime environment for the backend

#### Why MERN?

MERN is ideal for this project due to:

- Aligns with the suggested framework, although I do understand that Balerion uses GOLANG for backend, due to the nature of Express.js being able to provide easier usage of libraries connecting to mongoDB I thought it was a great choice for this Frontend Project.

> Other considerations 

- Streamlines authentication, routing and data handling.

- Rapid development allowing quick iteration within the timeframe.

#### Authentication System

- JWT-based authentication

- Role-based access control (ADMIN/USER)

- Protected routes

- Secure password hashing using bcrypt

#### Memo Card 
- Different views for Admin and User roles

- Automatic card numbering system

  - ADMIN-[number] format for admin cards
  - MEMO-[number] format for user cards

- Real-time updates when cards are created

- Sorting based on role:

  - Admin: Newest first
  - User: Oldest first




# Installation 

> Install node modules

```bash
npm install
```

```bash
cd ./frontend
npm install
```

### Before running

> Add the required MongoURI to .env following the .env.example

Run Backend

> Runs using nodemon for hot reload

```bash
npm run dev
```

Run Frontend

```bash
cd ./frontend

npm run dev
```

This code is submitted as part of a take-home assignment for the application process at Balerion. It may not be used, modified, or redistributed without the express permission of the applicant.
