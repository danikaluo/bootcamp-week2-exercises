// Write your relation model here!

const { ManyToManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Relation extends BaseModel {
    static get tableName() {
        return 'relations'
    }

    static get relationMappings() {
        const User = require('./User')
        return {
            relations: {
                relation: ManyToManyRelation,
                modelClass: User,
                join: {
                    from: 'users.id',
                    through: {
                        from: 'relations.parentId',
                        to: 'relations.childId'
                    },
                    to: 'users.id',
                },
            },
        }
    }
}

module.exports = Relation