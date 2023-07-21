# Online Judge Project (MERN Stack)

![image](https://drive.google.com/u/3/uc?id=1IshDC3Mi6SFimnnKAXs8gkQekcNK12sJ&export=download)

This is a comprehensive Online Judge project built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The project provides a platform for hosting coding competitions, practicing coding problems, and evaluating submissions. It is designed to facilitate the evaluation of programming skills and improve problem-solving capabilities.

## Features

- User authentication and registration
- Coding competition creation and management
- Practice coding problems with different difficulty levels
- Submission evaluation and scoring
- Leaderboard for competitions
- Code editor
- Admin dashboard for managing users, competitions, and problems

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Google auth / github auth
- **Code Editor:** CodeMirror
- **Real-time Communication:** Socket.IO

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/Rytnix/OnlineJudge.git
   ```
2. Navigate to the project directory:

   ```shell
   cd online-judge
   ```
3. Install the dependencies for both the frontend and backend:

   ```shell
   cd frontend
   npm install
   cd ../backend
   npm install
   ```
4. Configure the environment variables:
   
   - Create a `.env` file in the backend directory.
   - Add the necessary environment variables in the `.env` file. For example:
   ```shell
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   ```
5. Start the development servers:
   ```shell
   # Start the backend server
     cd backend
     npm start

   # Start the frontend development server in a new terminal window
     cd frontend
     npm start
   ```

