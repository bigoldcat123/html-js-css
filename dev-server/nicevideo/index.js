const express = require('express')
const path = require('node:path')
const os = require('node:os')
const isLinux = os.arch() == 'x64' ? true : false

const PATH = isLinux ? '/home/dadigua/Videos/' : '/Users/dadigua/Movies/'

const router = express.Router()
router.get('/heigh',(req,res) => {
    res.sendFile(PATH + '4k60s.mp4')
})
router.get('/low',(req,res) => {
    res.sendFile(PATH + '1080p22s.mp4')
})
router.get('/poster',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./poster.jpg'))
})

module.exports = router