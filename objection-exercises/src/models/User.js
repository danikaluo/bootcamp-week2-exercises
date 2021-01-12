const { HasManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Pet = require('./Pet')
    return {
      pets: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId'
        }
      }
    }
  }

  static get virtualAttributes() {
    return ['fullName', 'isLegal']  
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  get isLegal() {
    return this.age >= 21
  }

}

module.exports = User
