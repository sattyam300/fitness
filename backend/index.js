import express from 'express';  // Use import for express
import mongoose from 'mongoose';  // Use import for mongoose
import userRoutes from './routes/userRoutes.js';  // Use import for userRoutes
import planRoutes from './routes/planRoutes.js';  // Use import for planRoutes
import { MONGO_URI } from './config.js';  // Use import for MONGO_URI
import cors from 'cors';  // Use import for cors

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/plans', planRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
