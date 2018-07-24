import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import productsRouter from './server/routes/products';

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use('/api', productsRouter);

app.listen(port, () => {
    console.info(`App is running on port ${port}`);
});
