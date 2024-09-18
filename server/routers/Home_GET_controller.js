const stub = require('../stubs/homeStub')

const GET_HomeContent = async (req, res) => {
  res.send(stub)
}

module.exports ={
  GET_HomeContent,
}