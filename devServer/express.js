const express = require('express')
const fs = require('fs')
const path = require('path')

const port = process.env.PORT || 5000;

const app = express()

app.get(/\.(js|css|map|ico|gif|jpg|png|svg)$/, express.static(path.resolve(process.cwd(), 'build')))

app.use('*', (req,res) => {
    let indexHtml = fs.readFileSync(path.resolve(process.cwd(), 'build', 'index.html'), {
        encoding: 'utf-8'
    })

    res.contentType('text/html')
    res.status(200)

    return res.send(indexHtml)
})

app.listen(port, () => {
    console.log('http://localhost:' + port)
})