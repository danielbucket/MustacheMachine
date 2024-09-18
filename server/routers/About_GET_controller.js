const stub = require('../stubs/aboutStub')

const GET_AboutContent = async (req, res) => {
  res.send(stub)
}

module.exports = {
  GET_AboutContent,
}