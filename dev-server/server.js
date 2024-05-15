const express = require('express')
const app = express()

app.use((req,res) => {
    res.sendFile('')
    res.json({
        name:'hi'
    })
})
app.listen(8888, () => {
    console.log('listem at port : ' + 8888);
})