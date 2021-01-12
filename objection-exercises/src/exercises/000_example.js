const User = require('../models/User')
const cleanup = require('../lib/cleanup')

const allUsers = async() => {
    try {
        const data = await User.query()
        .withGraphFetched('pets')
        console.dir(data, { depth: null })
        cleanup()

        return data
    } catch (err) {
        console.log(err)
    }
}

const instanceUser = async () => {
    try {
        const exampleTRX = await User.transaction(async trx => {
            const charles = await User.query(trx)
            .insert({
                email: 'charles.onesti@hsa.net',
                firstName: 'Charles',
                lastName: 'Onesti',
                age: 20
            }).returning('*')
            console.log(charles)
            const pet = await charles.$relatedQuery('pets', trx)
            .insert({type: 'DOG', name: 'Shep'})
            return pet
        })

        console.log(exampleTRX)

        cleanup()
    } catch (err) {
        console.log(err)
    }
}
instanceUser()