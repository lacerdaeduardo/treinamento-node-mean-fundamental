import mongoose, {
    mongo
} from 'mongoose';

let database = {};

database.start = function () {
    const url = process.env.MONGO_CONNECTION || 'mongodb://localhost:27017/treinamento-web';
    mongoose.connect(url, {
        useNewUrlParser: true
    });

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.info(`Connected on mongodb: ${url}`);
    });
};

export default database;