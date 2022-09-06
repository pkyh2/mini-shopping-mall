const express = require('express')
const app = express()
const session = require('express-session')

// 세션 설정
app.use(session({
  secret: 'secret code',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    maxAge: 1000 * 60 * 60
  }
}))

// 서버 연결 3000 port
const server = app.listen(3000, () => {
  console.log('Server started. port 3000.')
})

// db연결
const db = {
  database: "dev",
  connectionLimit: 10,
  host: "175.45.194.222",
  user: "root",
  password: "mariadb",
  port: "3306"
}

app.post('/api/login', async (request, res) => {
  
})

app.post('/api/logout', async (request, res) => {
  
})

const sql = require('./sql.js')

// login, logout 외에 모든 호출을 받는다.
app.post('/api/:alias', async (request, res) => {
  try {
    res.send(await req.db(request.params.alias))
  } catch (err) {
    res.status(500).send({
      error: err
    })
  }
})

const req = {
  async db(alias, param = [], where = '') {
    return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where, param, (error, rows) => {
      if (error) {
        if (error.code != 'ER_DUP_ENTRY')
          console.log(error);
        resolve({
          error
        })
      } else resolve(rows)
    }))
  }
}