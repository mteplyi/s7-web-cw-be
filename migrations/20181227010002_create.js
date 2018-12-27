const tableName = 'note';

exports.up = (knex) => knex.schema.createTable(tableName, (table) => {
  table.increments('id').primary();
  table.text('text').notNullable();
});

exports.down = (knex) => knex.schema.dropTable(tableName);
