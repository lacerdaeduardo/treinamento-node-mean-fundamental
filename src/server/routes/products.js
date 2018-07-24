import express from 'express';

const router = express.Router();

router.get('/products', (req, res) => {
    var returnMessage = {
        'method': 'GET',
    };

    res.json(returnMessage);    
});

router.get('/products/:id', (req, res) => {
    var returnMessage = {
        'method': 'GET',
        'id': req.params.id
    };

    res.json(returnMessage);    
    
});

router.post('/products', (req, res) => {    
    var returnMessage = {
        'method': 'POST',
        'body': req.body
    };

    res.json(returnMessage);    
});

router.put('/products/:id', (req, res) => {
    
    var returnMessage = {
        'method': 'PUT',
        'body': req.body,
        'id': req.params.id
    };

    res.json(returnMessage); 
});

router.delete('/products/:id', (req, res) => {
    
    var returnMessage = {
        'method': 'PUT',
        'body': req.body,
        'id': req.params.id
    };

    res.json(returnMessage); 
});

export default router;