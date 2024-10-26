const express = require('express');
const router = express.Router()
router.use(express.json())
const achievements = [
    {
        "id":1,
        "name": "John",
        "achievement_id":"1",
        "timestamp":"050000"
    }
]

router.post('/', (req,res,next) =>{
    console.log(req.body)
    res.status(202).json(req.body)
})

module.exports = router;

