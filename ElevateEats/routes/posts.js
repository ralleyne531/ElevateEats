const express = require('express')
const router = express.Router()
router.use(express.json())
const posts = [
    {
        "id": 0,
        "user_id":123,
        "content": "abc",
        "image_url": "imgurl",
        "timestamp": "025959"
    },
    {
        "id": 1,
        "user_id":456,
        "content": "xyz",
        "image_url": "imgurl1",
        "timestamp": "030000"
    }
]

 //Static Routes
 //Create Post
router.post('/', (req,res) => {
    if(Object.keys(req.body).length === 0){
        console.log("There was an error creating this post, match type: JSON")
        res.status(404).send('404 Bad Request')
    }else{
    console.log(req.body)
    posts.push(req.body)
    res.status(202).json(req.body)
    }
})

//Get Posts
router.get('/', (req, res) => {
    res.send(posts)
  })

//Saving post information through middleware
router.param('id', (req,res,next,id) => {
    req.post = posts[id]
    next()
})

router.post('/:id/comments', (req, res, next) => {
    if(Object.keys(req.body).length === 0){
        console.log("There was an error creating this comment, match type: JSON")
        res.status(404).send('404 Bad Request')
    }else{
    console.log(req.body)
    res.status(202).json(req.body)
    }
})

router.post('/:id/likes', (req, res, next) => {
    if(Object.keys(req.body).length === 0){
        console.log("There was an error creating this comment, match type: JSON")
        res.status(404).send('404 Bad Request')
    }else{
    console.log(req.body.likes)
    res.status(202).json(req.body.likes)
    }
})
  module.exports = router