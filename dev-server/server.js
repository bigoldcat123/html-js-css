const express = require('express')
const niceVideoRouter = require('./nicevideo/index')
const app = express()


app.use('/niceVideo',niceVideoRouter)

app.listen(8888, () => {
    console.log('listem at : http://localhost:' + 8888);
})