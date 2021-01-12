const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  try {
      const exampleTRX = await User.transaction(async trx => {
          const charles = await User.query(trx)
          .insert({
              email: 'charles@hsa.net',
              firstName: 'Charles',
              lastName: 'Onesti',
              age: 20
          }).returning('*')
          console.log(charles)
          const pet = await charles.$relatedQuery('pets', trx)
          .insert({type: 'CAT', name: 'Tiger'})
          const totalPets = await Pet.query().resultSize()
          console.log(totalPets)
          if (totalPets > 15) {
          await Pet.query().delete().where('type','BIRD').returning('*')
          }
          return pet
      })

      console.log(exampleTRX)

      cleanup()
  } catch (err) {
      console.log("This is an error")
  }
  // -----
  cleanup()
}

run()
