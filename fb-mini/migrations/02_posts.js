exports.up = async knex => knex.schema.createTable('posts', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('userId')
      .references('users.id')
      .notNullable()

    table.text('des').notNullable()
    
    table.timestamp('postedAt').defaultTo(knex.fn.now())

    table.integer('likes').notNullable()
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('posts')
  