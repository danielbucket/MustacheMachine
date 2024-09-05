const GET_aboutMe = (req, res, next) => {
  const aboutMeText = `I'm a software engineeeer with a passion for creating and building things. I'm a full stack developer with a focus on front end technologies. I'm a big fan of React and I'm always looking for new ways to improve my skills. I'm also a big fan of the outdoors and I love to travel.`
  
  res.status(200).send(JSON.stringify(aboutMeText))
  next()
}

module.exports = {
  GET_aboutMe
}