const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const pablo = await User.query().where('firstName','Pablo')
  console.log(pablo)

  // Do the same with object notation
  const pabloObject = await User.query().where({firstName: 'Pablo'})
  console.log(pabloObject)

  // Get all DOGS and BIRDS
  const dogsBirds = await Pet.query().whereIn('type',['DOG','BIRD'])
  console.log(dogsBirds)
  // -----
  cleanup()
}

run()
