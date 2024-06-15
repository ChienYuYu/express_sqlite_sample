const sqlite3 = require('sqlite3').verbose()
const dbName = 'myDatabase.db'

let db = new sqlite3.Database(dbName, (err) => {
  if(err) {
    console.error(err.message)
  } else {
    console.log('資料庫已連線');
    db.run('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT)', (err) => {
      if(err) {
        console.error(err.message)
        console.error(err)
      } else {
        console.log('Table已創建或已存在~');
      }
    })
  }
})

module.exports = db