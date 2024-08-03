const express = require('express')
const router = express.Router()
const users = [{name:'John'}, {name:'Doe'}]

router.get('/', (req, res) => {
    res.send('USER LIST')
  })

 //Static Routes
router.get('/new', (req,res) => {
    res.render('users/new', { firstName: 'First' })
})

router.post('/', (req,res) => {
    const isValid = true
    if(isValid){
        users.push({'name':req.body.firstName})
        res.redirect(`/users/${users.length -1}`)
    } else{
        console.log(error)
        res.render('users/new', {firstName: req.body.firstName})
    }
    console.log(req.body.firstName)
})

router.get('/:id', (req,res) =>{
    console.log(req.user)
    res.send(`Get User: ${req.user.name} With ID ${req.params.id}`)
})


router.param('id', (req,res,next,id) => {
    req.user = users[id]
    next()
})
  module.exports = router