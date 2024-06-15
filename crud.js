
const db = require('./database')

//CCCCC
const createItem = (name, description, callback) => {
  const sql = `INSERT INTO items(name, description) VALUES(?, ?)`
  db.run(sql, [name, description], function(err) {
    callback(err, {id: this.lastID})
  })
}

//RRRRR
const readItem = (callback) => {
  const sql = `SELECT * FROM items`
  db.all(sql, [], callback)
}

//UUUUU
const updateItem = (id, name, description, callback) => {
  const sql = `UPDATE items SET name = ?, description = ? WHERE id = ?`
  db.run(sql, [name, description, id], callback)
}


// DDDDD
const deleteItem = (id, callback) => {
  const sql = `DELETE FROM items WHERE id = ?`
  db.run(sql, id, callback)
}


module.exports = { createItem, readItem, updateItem, deleteItem }