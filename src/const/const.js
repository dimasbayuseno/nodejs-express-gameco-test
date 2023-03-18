const missingAuth = "Authorization header is missing"
const invalidAuth = "Invalid username or password"
const fetchError = "Error fetching Pokemon"

const authorizedUsers = {
    'username': 'gameconsign',
    'password': 'password'
  };

const unauthorized = 401
const internalServerError = 500

module.exports = {
    missingAuth,
    invalidAuth,
    unauthorized,
    authorizedUsers,
    internalServerError,
    fetchError
}