const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routes/posts')

app.use(express.static("public"))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use('/posts', postsRouter)

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.status(200).send(`Hello World! ${res.statusCode}`)
})



app.listen(port, () =>{
    console.log(`Elevate Eats listening on port ${port}`)
})
