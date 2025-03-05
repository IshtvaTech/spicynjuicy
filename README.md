# JNC Project

## Introduction

JNC is a web-based application designed to provide an efficient and secure shopping and admin experience. The project ensures proper authentication and role-based access for users and administrators.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/jnc-project.git
   cd jnc-project
   ```

2. **Install Dependencies:**

   ```bash
   Frontend (client/)
   cd client
   npm install

   Backend (server/)
   cd ../server
   npm install
   ```

3. **Running the Project:**

   ```bash
   Start the Backend
   cd server
   npm run dev

   Start the Frontend
   cd ../client
   npm run dev
   ```

## Tech Stack

- **Frontend:** React, React Router, Redux
- **Backend:** Node.js, Express.js (if applicable)
- **Database:** MongoDB (if applicable)
- **Styling:** Tailwind CSS
- **Authentication:** JWT, Redux Toolkit
- **Payment Integration:** Stripe API

---

## Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
MONGO_URI="mongodb+srv://mitdesai4703:desai4703@cluster0.5nyuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
PORT="5000"
CORS_ORIGIN="http://localhost:5173"

CLOUDINARY_CLOUD_NAME="dsiuht6vl"
CLOUDINARY_API_KEY="854153298171466"
CLOUDINARY_API_SECRET="_xdD30ZOeC4ZvDR5Bjoogndp-5U"

VITE_STRIPE_SECRET_KEY=sk_test_51QoKVRHr2FbUrmkwhkTSmRafE4y178DELtZoNwMvaYspiVieeE4IkpAk3bDPWfUi35s9zEfP8e7GYaC0hhklxK4800FLe5fpL4
```
