const jwt = require('jsonwebtoken');
const secret = 'hej123';

exports.createIDToken = (userID) => {
  return jwt.sign({
    data: userID
  }, secret , { expiresIn: '7d' });
};

exports.deCodeIdToken = (token) => {
  var decoded = jwt.verify(token, secret);
  console.log(decoded.data)
  return decoded.data;
};