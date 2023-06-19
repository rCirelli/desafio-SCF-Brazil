require('dotenv/config');
const jwt = require('jsonwebtoken');
const HttpException = require('./HttpException');
const { UNAUTHORIZED } = require('./httpStatusCodes');

const secret = process.env.JWT_SECRET;

class JwtUtils {
  constructor() {
    this.jwt = jwt;
    this.jwtSecret = secret;
  }

  generateToken(user) {
    const { name, job } = user;
    const payload = { name, job };

    return this.jwt.sign(payload, this.jwtSecret);
  }

  decodeToken(token) {
    let decoded;
    try {
      decoded = this.jwt.verify(token, this.jwtSecret);
    } catch (error) {
      throw new HttpException(UNAUTHORIZED, 'Invalid token');
    }
    return decoded;
  }
}

module.exports = new JwtUtils();