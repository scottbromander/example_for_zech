var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    //THIS IS THE INFO OFF THE FORM FROM THE FRONT END
    console.log(req.body);
    res.send({messageFromServer: 'Got it!'});
});

router.get('/', function(req, res, next){
    
});

module.exports = router;