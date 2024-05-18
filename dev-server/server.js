const express = require('express')
const os = require('node:os')
const isLinux = os.arch() == 'x64' ? true : false

const PATH = isLinux ? '/home/dadigua/Videos/' : '/Users/dadigua/Movies/'

const app = express()

app.use('/heigh',(req,res) => {
    res.sendFile(PATH + '4k60s.mp4')
})
app.use('/low',(req,res) => {
    res.sendFile(PATH + '4k53.mp4')
})
app.listen(8888, () => {
    console.log('listem at : http://localhost:' + 8888);
})