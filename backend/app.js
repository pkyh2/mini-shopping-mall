const express = require('express')
const app = express()
const session = require('express-session')
const fs = require('fs')

app.use(session({
  secret: 'secret code',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000*60*60
  }
}))

const server = app.listen(3000, () => {
  console.log('Server started. port 3000.');
})

const db = {
  database: "dev",
  connectionLimit: 10,
  host: "175.45.194.222",
  user: "root",
  password: "mariadb"
}

// createPool에 db 정보를 넣어주면 db와 연동이 된다.
const dbPool = require('mysql').createPool(db)
// const로 선언하면 변경되지 않아서 
let sql = require('./sql.js')

fs.watchFile(__dirname + '/sql.js', (curr, prev) => {
  console.log('sql 변경시 재시작 없이 반영되도록 함.')
  delete require.cache[require.resolve('./sql.js')]
  sql = require('./sql.js')
})

app.post('/api/login', async (request, res) => {
    request.session['email'] = 'pkyh1@naver.com'
    console.log(request.session['email'])
    res.send('ok')
});

app.post('/api/logout', async (request, res) => {
  request.session.destroy()
  res.send('ok')
});


app.post('/api/:alias', async (request, res) => {
  if(!request.session.email) {
    return res.status(401).send({error: 'You need to login'})
  }
  
  try {
    res.send(await req.db(request.params.alias))
  } catch(error) {
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
        });
      } else resolve(rows);
    }));
  }
};