const jwt = require('jsonwebtoken');


const validateToken = (req, res, next) => {


    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];

        try {
            const decoded = jwt.verify(token, process.env.SECRETKEY);
    
            // Passing the decoded value
            req.decoded = decoded;
            next();
          } catch(err) {
            // err
            console.log('Error', error);
          }
    } else {
        return res.status(401).json({
            message: "User not authorized, token required"
        })
    }


     

}



module.exports = validateToken;