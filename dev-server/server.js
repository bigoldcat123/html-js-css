const express = require('express')
const app = express()

app.use((req,res) => {
    res.sendFile('/Users/dadigua/Movies/4k6s.mp4')
})
app.listen(8888, () => {
    console.log('listem at : http://localhost:' + 8888);
})