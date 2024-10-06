# Travel Planner

This project is designed to help users plan their travels by allowing them to log in, save travel plans, and view them in a user-friendly interface. The application uses a Node.js backend with Express and a MySQL database for storing user and travel plan data.

## Features

- User authentication with login functionality.
- Save travel plans with destination and date.
- Display saved travel plans in a table format.
- Responsive design for a better user experience on both desktop and mobile devices.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Software](#software)
- [How It Works](#how-it-works)
- [Results](#results)

## Installation

1. Clone the repository from GitHub:

    ```bash
    git clone https://github.com/AdlinBebisha/travel_Planner.git
    ```

2. Navigate to the server directory and install the required dependencies:

    ```bash
    cd travel-planner/server
    npm install
    ```

3. Set up the MySQL database:

   - Create a new database called `travelplanner`.
   - Create a `users` table with the following structure:

     ```sql
     CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(255) NOT NULL UNIQUE,
       password VARCHAR(255) NOT NULL
     );
     ```

   - Create a `travel_plans` table with the following structure:

     ```sql
     CREATE TABLE travel_plans (
       id INT AUTO_INCREMENT PRIMARY KEY,
       destination VARCHAR(255) NOT NULL,
       date DATE NOT NULL,
       user VARCHAR(255) NOT NULL
     );
     ```

4. Start the server:

    ```bash
    node server.js
    ```

5. Open the `index.html` file in your web browser to access the application.

## Usage

### GUI Features

1. **Login:**  
   Enter your username and password to log in to the application.

2. **Save Travel Plans:**  
   After logging in, enter the destination and date of your travel plan and click "Save" to store it.

3. **View Travel Plans:**  
   The saved travel plans will be displayed in a table format, showing the destination and date.

### Browser Configuration

Ensure that your browser allows JavaScript and has the latest updates for the best performance.

## Software

- The application uses the following technologies:
  - **Frontend:** HTML, CSS, JavaScript
  - **Backend:** Node.js, Express
  - **Database:** MySQL

## How It Works

1. **User Authentication:**  
   Users can log in to the application using their credentials stored in the MySQL database.

2. **Travel Plan Management:**  
   Users can create and manage their travel plans. The application fetches and displays these plans from the database.

3. **Data Display:**  
   The travel plans are rendered in a responsive table format, allowing users to view their plans easily.

## Results

- The application provides users with a simple interface to manage their travel plans.
- Users can easily log in, save their travel plans, and view them in an organized manner.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [CORS](https://github.com/expressjs/cors)
