exports.up = async knex => knex.schema.createTable('friends', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('followerId')
      .references('users.id')
      .notNullable()

    table
      .uuid('followingId')
      .references('users.id')
      .notNullable()
    
    table.timestamp('requestedAt').defaultTo(knex.fn.now())

    table
      .string('status')
      .notNullable()
      .defaultTo('requested')
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('friends')
  