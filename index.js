console.log('hello');

const express = require('express')
const { createItem, readItem, updateItem, deleteItem } = require('./crud')
const app = express()

app.use(express.json())

app.get('/items', (req, res) => {
  readItem((err, rows) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.status(200).json(rows)
    }
  })
})

app.post('/items', (req, res) => {
  const {name, description} = req.body
  createItem(name, description, (err, data) => {
    if(err) {
      res.status(500).send(err.message)
    } else {
      res.status(201).send(`新增一筆資料 ID: ${data.id}`)
    }
  })
})

app.put('/items/:id', (req,res) => {
  const {name, description} = req.body
  updateItem(req.params.id, name, description, (err) => {
    if(err) {
      res.status(500).send(err.message)
    } else {
      res.status(200).send("更新成功")
    }
  })
})

app.delete('/items/:id', (req, res) => {
  deleteItem(req.params.id, (err) => {
    if(err) {
      res.status(500).send(err.message)
    } else {
      res.status(200).send('已刪除~')
    }
  })
})

app.listen(3000, () => {
  console.log('server running !! 3000 port...');
})