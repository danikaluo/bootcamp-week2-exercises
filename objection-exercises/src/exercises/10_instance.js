const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const danika = await User.query().findOne({ firstName: 'Danika' })
  // Use that instance to create a new pet related that user
  await danika.$relatedQuery('pets').insert({ type: 'DOG', name: 'Spot'})
  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  cleanup()
}

run()
