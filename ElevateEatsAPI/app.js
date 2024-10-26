const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routes/posts')
const achievementsRouter = require('./routes/achievements')
const {MongoClient} = require("mongodb");

const uri = "mongodb+srv://ralleyne:aKmZeKVumyqY6WQP@elevateeats.l3kch.mongodb.net/?retryWrites=true&w=majority&appName=ElevateEats";
const client = new MongoClient(uri);

app.use(express.static("public"))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use('/posts', postsRouter)
app.use('/achievements', achievementsRouter)

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.status(200).send(`Hello World! ${res.statusCode}`)
})



try {
    client.connect().then(r => {
        console.log(client.db("ElevateEats").command({ ping: 1 }));
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        app.listen(port, () =>{
            console.log(`Elevate Eats listening on port ${port}`)});
            //console.log(client.db().("show dbs"));
    })
} finally {
    // Ensures that the client will close when you finish/error
    client.close();
}
// app.listen(port, () =>{
//     console.log(`Elevate Eats listening on port ${port}`)
// })
