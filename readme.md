🚗 Car Insurance Web Application (MERN)

This is a MERN stack Car Insurance application where users enter a vehicle registration number, store it in the backend, and retrieve it on the Car Insurance page.
The frontend is built using React, and the backend is powered by Node.js & Express.

📍 Project Location
Backend
C:\Users\thahi\OneDrive\Desktop\my-project\server
Frontend
C:\Users\thahi\OneDrive\Desktop\my-project\client\my-project

🛠 Technologies Used
Frontend

React

React Router DOM

Axios

Tailwind CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

CORS

dotenv

⚙️ Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/my-project.git
▶️ Running the Backend

Open terminal and navigate to the backend folder:

cd C:\Users\thahi\OneDrive\Desktop\my-project\server

Install backend dependencies:

npm install

Create a .env file and add:

PORT=3001
MONGODB_URI = mongodb+srv://thahirasherinbeauty225:Jinjuma09@cluster0.ryo0jx9.mongodb.net/MY-Project

Start the backend server:

npm start

✅ Backend will run on:
http://localhost:5173

-----------------------------------------------

▶️ Running the Frontend

Open a new terminal and navigate to the frontend folder:

cd C:\Users\thahi\OneDrive\Desktop\my-project\client\my-project

Install frontend dependencies:

npm install

Start the React development server:

npm start

✅ Frontend will run on:

http://localhost:3000
🔄 Application Flow

User enters vehicle registration number on Car Entry page

Data is sent to backend using Axios

Backend stores vehicle number in database

User is redirected to Car Insurance page

Vehicle number is fetched and displayed

🌐 API Communication

Frontend communicates with backend via REST APIs

Axios is used for POST & GET requests

CORS is enabled on backend

🚀 Build for Production (Frontend)
npm run build

Creates an optimized production build inside the build folder.

🧪 Testing
npm test

Runs tests in watch mode (if configured).

📦 Deployment Notes

Frontend can be deployed using Netlify or Vercel

Backend can be deployed using Render, Railway, or Cyclic

Ensure backend URL is updated in Axios config after deployment

❗ Common Issues

Make sure backend is running before frontend

Check MongoDB connection string

Enable CORS correctly

Verify API URLs in Axios

📚 Learn More

React: https://reactjs.org/

Node.js: https://nodejs.org/

Express: https://expressjs.com/

MongoDB: https://www.mongodb.com/

👩‍💻 Author

Thahira Sherin
Built using MERN stack with a focus on clean UI and scalable architecture.