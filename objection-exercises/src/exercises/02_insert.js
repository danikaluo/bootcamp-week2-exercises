const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  // const me = await User.query().insert({
  //   email: 'email@gmail.com',
  //   firstName: 'Danika',
  //   lastName: 'Luo',
  //   age: 19
  // }).returning('*')
  // console.log(me)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  try{
    const myPet = await Pet.query().insert({
    ownerId: '9a5c11da-abf9-46d0-a429-faee6b1f3750',
    type: 'DOG',
    name: 'Daisy'
    }).returning('*')
    console.log(myPet)
  } catch (err) {
    console.log(err)
  }
  

  // -----
  cleanup()
}

run()
