const contactStub = require('../stubs/contactStub')

const GET_ContactContent = async (req, res) => {
  
  res.status(200).send(JSON.stringify({ ...contactStub }))
}

module.exports = {
  GET_ContactContent,
}