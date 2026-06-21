# Job Tracker

A full-stack web application that helps users keep track of their job applications in one place. Users can register, log in securely, add job applications, update application status, and manage their job search progress through a simple dashboard.

## Features

* User Registration and Login
* JWT-based Authentication
* Create, View, Update, and Delete Job Applications
* Track application status (Applied, Interview, Offer, Rejected)
* Filter jobs by status
* User-specific dashboard and data isolation
* Responsive and modern UI
* Cloud database using MongoDB Atlas

## Tech Stack

### Frontend

* React.js
* React Router
* Vite

### Backend

* Node.js
* Express.js
* JWT Authentication

### Database

* MongoDB Atlas

### Deployment

* Frontend: Vercel
* Backend: Render

## Project Structure

```text
Job Application
│
├── frontend
│   ├── src
│   └── public
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   └── config
│
└── README.md
```

## How It Works

1. Users create an account using the registration page.
2. After logging in, a JWT token is generated and stored.
3. Authenticated users can add and manage job applications.
4. Job data is stored securely in MongoDB Atlas.
5. Users can update application status and filter jobs based on progress.

## Installation

### Clone the Repository

```bash
git clone https://github.com/Kotesh127/job-tracker.git
cd job-tracker
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Future Improvements

* Search jobs by company name
* Sort by application date
* Dashboard analytics and charts
* Email notifications
* Profile management
* Dark/Light theme toggle

## Author

Kotesh Ambati

Built as a full-stack learning project to gain hands-on experience with React, Node.js, Express, MongoDB Atlas, authentication, deployment, and cloud-based application development.
