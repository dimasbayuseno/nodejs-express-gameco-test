const missingAuth = "Authorization header is missing"
const invalidAuth = "Invalid username or password"
const fetchError = "Error fetching Pokemon"

const unauthorized = 401
const internalServerError = 500

const defaultPage = 1
const defaultLimit = 10

const defaultSort = "pokemon"

module.exports = {
    missingAuth,
    invalidAuth,
    unauthorized,
    internalServerError,
    fetchError,
    defaultLimit,
    defaultPage,
    defaultSort
}