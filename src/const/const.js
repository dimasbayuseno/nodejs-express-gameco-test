const missingAuth = "Authorization header is missing"
const invalidAuth = "Invalid username or password"

const authorizedUsers = {
    'username': 'gameconsign',
    'password': 'password'
  };

const unauthorized = 401

module.exports = {
    missingAuth,
    invalidAuth,
    unauthorized,
    authorizedUsers
}