require('dotenv/config');
const Knex = require('knex');

const { ENVIRONMENT = 'dev' } = process.env;
const knexConfig = require('./../../knexfile')[ENVIRONMENT];

const knex = new Knex(knexConfig);

exports.get = () => knex('note');

exports.create = (note) => knex('note')
  .insert(note)
  .returning('id')
  .then(([id]) => id);

exports.update = ({ id, text }) => knex('note')
  .first()
  .where({ id })
  .update({ text });

exports.remove = (noteId) => knex('note')
  .first()
  .where({ id: noteId })
  .delete();
