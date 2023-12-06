require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = `${process.env.JWT_SECRET}`
const project_id = `${process.env.PROJECT_ID}`
const username = `${process.env.USERNAME}`
const roles = `${process.env.ROLES}`

var token = jwt.sign({
  external: true,
  project: {
    _id: project_id,
  },
  user: {
    _id: 'external',
    data: {
      name: username,
    },
    roles: roles.split(','),
  }
}, secret)
console.log(token);
