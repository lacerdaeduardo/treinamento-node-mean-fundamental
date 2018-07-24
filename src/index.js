import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Treinamento web... primeira rota!');
});

app.listen(port, () => {
    console.info(`App is running on port ${port}`);
});
