const response = require("../const/const")

const authRequest = (req, res, next) => {
    console.log("auth validation")
    const authHeaders = req.headers.authorization
    const [scheme, credentials] = authHeaders.split(' ');
    const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');



    if (!authHeaders) {
        return res.status(response.unauthorized).send(response.missingAuth)
    }

    if (scheme !== 'Basic') {
        return res.status(401).send('Unauthorized');

    }

    if (username !== response.authorizedUsers.username || password !== response.authorizedUsers.password) {
        res.status(401).send('Unauthorized');
        return;
    }

    next();
}

module.exports = authRequest;