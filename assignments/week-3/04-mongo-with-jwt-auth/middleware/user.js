function userMiddleware(req, res, next) {
    // Implement user auth logic
    const token = req.headers.authorization;

    const jwtToken = token.split(" ")[1];

       const decodedValue = jwt.verify(jwtToken,secret)

       if(decodedValue.username) {
        next();
       } else {
        res.status(403).json({
            msg: "You are not authenticated"
        })
       }

    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;