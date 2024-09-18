const contactStub = require('../stubs/contactStub')

const GET_ContactContent = async (req, res) => {
  res.send({ ...contactStub })
}

module.exports = {
  GET_ContactContent,
}