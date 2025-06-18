import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import './database/index';
import categoryRoutes from './routes/category.routes';



const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/categories', categoryRoutes);



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
