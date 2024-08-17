const express = require('express')
const router = express.Router()
const posts = [{name:'John'}, {name:'Doe'}]

router.get('/', (req, res) => {
    res.send('POSTS LIST')
  })

 //Static Routes
router.get('/new', (req,res) => {
    res.render('posts/new', { firstName: 'First' })
})

router.post('/', (req,res) => {
    const isValid = true
    if(isValid){
        users.push({'name':req.body.firstName})
        res.redirect(`/posts/${users.length -1}`)
    } else{
        console.log(error)
        res.render('posts/new', {firstName: req.body.firstName})
    }
    console.log(req.body.firstName)
})

router.param('id', (req,res,next,id) => {
    req.user = posts[id]
    next()
})

router.get('/:id', (req,res) =>{
    console.log(req.user)
    res.send(`Get User: ${req.user.name} With ID ${req.params.id}`)
})

router.post('/:id/comments', (req, res, next) => {
    console.log(req)
    res.status(202).send('Success')
})

router.post('/:id/likes', (req, res, next) => {
    console.log(req)
    res.status(202).send('Success')
})
  module.exports = router