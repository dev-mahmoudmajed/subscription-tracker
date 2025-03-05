// ------------------{  Importing Modules  }----------------------
import express from 'express';
import {PORT} from './config/env.js';
const port = PORT || 5500;
const app = express();

// ------------------{  Importing Database  }--------------------
import connectDB from "./database/mongodb.js";

// ------------------{  Importing Routes  }----------------------
import userRouter from './Routes/user.routes.js';
import authRouter from './Routes/auth.routes.js';
import subscriptionRouter from './Routes/subscription.route.js';

// -------------------{ Middlewares }---------------------
app.use(express.json());

//-------------------------------{  Routes  }----------------------------------
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

// ------------------{     main Route     }----------------------
app.get('/',(req,res) => {
  res.send('Welcome to the Subscription Tracker API');
});


// ------------------{  Run Server  }----------------------
app.listen(port, async() => {
  console.log(`Subscription Tracker is running on http://localhost:${port}/`);
  await connectDB();
});

export default app;
