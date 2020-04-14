const config = require("config");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const domain = config.get("domain")
const audience = config.get("audience")

let jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${domain}.well-known/jwks.json`,
}),
  audience: `${audience}`,
  issuer: `${domain}`,
  algorithms: ['RS256']
});

module.exports = jwtCheck
