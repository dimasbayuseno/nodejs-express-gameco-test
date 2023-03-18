const response = require("../const/const")

const authRequest = (req, res, next) => {
    console.log("auth validation")
    const authHeaders = req.headers.authorization
    const [scheme, credentials] = authHeaders.split(' ');
    const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');



    if (!authHeaders) {
        return res.status(response.unauthorized).send(response.missingAuth);
    }

    if (scheme !== 'Basic') {
        return res.status(response.unauthorized).send(response.missingAuth);

    }

    if (username !== response.authorizedUsers.username || password !== response.authorizedUsers.password) {
        return res.status(response.unauthorized).send(response.invalidAuth);
    }

    next();
}

module.exports = authRequest;