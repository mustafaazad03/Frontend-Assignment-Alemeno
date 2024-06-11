# Courses Project

### Overview

**Courses** is a comprehensive platform designed to facilitate online learning. It allows users to explore, enroll, and track progress in various courses. The application is built using modern web technologies such as React, Redux, and React Router with CSS Framework Tailwind CSS along with optimum performance to improve user-experience.

### Video Demo




https://github.com/mustafaazad03/Frontend-Assignment-Alemeno/assets/97380192/7c984ef6-9bde-475c-b340-0f9a43f5f5be





### Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)

### Getting Started

To get started with the project, clone the repository and follow the instructions below to set up and run the application locally.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mustafaazad03/Frontend-Assignment-Alemeno.git
   cd Frontend-Assignment-Alemeno
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

This will start the application on `http://localhost:5173`.

### Features

- **User Authentication**: Users can sign up and log in to the application.
- **Course Enrollment**: Users can enroll in courses and track their progress.
- **Course Filtering**: Users can filter courses based on categories.
- **Responsive Design**: The application is fully responsive and works on all devices.
- **Search Courses**: Users can search for courses by name or instructor.
- **Course Progress**: Users can view their progress in enrolled courses.
- **State Management**: The application uses Redux for state management.
- **Performance Optimized**: The application is optimized for performance and provides a smooth user experience.
- **Pagination**: Courses are paginated for better performance.
- **Course Details**: Users can view detailed information about each course.
- **Course Completion**: Users can mark courses as completed.
- **Tab Navigation**: Users can navigate between different tabs in the dashboard.

### Code Overview

#### Main Files

- **main.jsx**: Entry point of the application. Sets up the Redux provider and renders the main `AppInitializer` component.
- **app.jsx**: Initializes the application by setting up routes and dispatching actions to load initial data.

#### Redux Store

- **store.js**: Configures the Redux store.
- **courseContext.js**: Contains actions and reducers for managing courses and enrolled courses state.
