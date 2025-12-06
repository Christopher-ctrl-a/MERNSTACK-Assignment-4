// christopher Esguerra server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: "../.env" });
// dotenv.config();


import userRoutes from './routes/userroutes.js';
import authRoutes from './routes/authroutes.js';


const app = express();

const PORT = process.env.MONGO_PORT;
app.use(bodyParser.json());
app.use(cors());



mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.once('open', () => {
 console.log('Connected to MongoDB');
 console.log('Using database:', mongoose.connection.db.databaseName);
 

});



 app.get("/", (req, res) => {
res.json({
  message: 'Hello, welcome to my portfolio application BACKEND.',
});
});


app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));