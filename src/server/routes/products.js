import express from 'express';
import product from '../model/product';

const router = express.Router();

router.get('/products', (req, res) => {

    product.find({}, (err, products) => {

        if (err) {
            sendError(res, err);
        } else {
            res.json(products);
        }
    }).sort({
        '_id': -1
    });

});

router.get('/products/:id', (req, res) => {
    let id = req.params.id;

    product.findOne({_id: id}, (err, product) => {
        if (err) {
            sendError(res, err);
        } else {
            res.json(product);
        }
    }).sort({
        '_id': -1
    });

});

router.post('/products', (req, res) => {
    let body = req.body;

    var validation = validateBody(body);

    if (!validation.isValid) {
        sendError(res, validation.errors);
    } else {
        product.create(body, (err, product) => {
            if (err) {
                res.status(500).json({
                    'error': err
                });
            } else {
                res.json(product);
            }
        });
    }
});

router.put('/products/:id', (req, res) => {

    let id = req.params.id;
    let body = req.body;

    var validation = validateBody(body);

    if (!validation.isValid) {
        sendError(res, validation.errors);
    } else {

        product.findOne({_id: id}, (err, product) => {
            if (err) {
                sendError(res, err);
            } else {
                product.price = body.price;
                product.brand = body.brand;
                product.description = body.description;
                
                product.save((err, p) => {
                    if (err){
                        sendError(res, err);
                    }else{
                        res.json(p);
                    }
                });
            }
        });
    }
});

router.delete('/products/:id', (req, res) => {

    let id = req.params.id;

    product.findOneAndRemove({_id: id}, (err, product) => {
        if (err) {
            sendError(res, err);
        }else if (!product){
            res.json({'message':'Product not found'});
        } else {
            res.json(product);
        }
    });
});

function sendError(res, err) {
    res.status(403).json({
        'error': err
    });
}

function validateBody(body) {

    let validation = {};
    let errors = [];

    if (!body.description) {
        errors.push('Description is null or empty');
    }

    if (!body.brand) {
        errors.push('Brand is null or empty');
    }

    if (errors.length > 0) {
        validation.isValid = false;
        validation.errors = errors;
        return validation;
    }else{
        validation.isValid = true;
        return validation;
    }
}

export default router;