const pass = require('../../config/config.js');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks if the issuer is the one who is using the token
    jwt.verify(token, pass.secret, {issuer: req.params.id}, function(err, decoded) {  
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request to use in next callback
          req.decoded = decoded;    
          next();
      } 
      
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
}

