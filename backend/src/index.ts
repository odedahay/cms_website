import express from 'express';
import './database/index';


const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hello Helllo Ode!!!');
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
