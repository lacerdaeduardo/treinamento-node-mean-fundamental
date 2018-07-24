import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import productsRouter from './server/routes/products';
import db from './server/db/db';
import path from 'path';

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// start database
db.start();

// routes
app.use('/api', productsRouter);

// use angular built folder
app.use(express.static(path.join(__dirname, 'app', 'public')));

app.listen(port, () => {
    console.info(`App is running on port ${port}`);
});
