const personalDataStub = require('../stubs/personalStub')

const GET_personalPageContent = async (req, res) => {
  res.send(personalDataStub)
}

module.exports = {
  GET_personalPageContent,
}