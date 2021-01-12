const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const allUsersPets = await User.query().withGraphFetched('pets')
  console.log(allUsersPets)

  // Get all users, their pets, AND their children
  // const allUsersPetsChildren = await User.query().withGraphFetched(['pets'])
  // console.log(allUsersPetsChildren)

  // Get all users, their parents, and their grandparents

  // Get all users, their pets, their chilren, and their childrens' pets

  // -----
  cleanup()
}

run()
