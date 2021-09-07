// DO YOUR MAGIC
const express = require('express')
const Car = require('./cars-model')

const router = express.Router()

router.get('/', async(req, res, next) =>{
    try{
        res.json('get array of cars')
    } catch (err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) =>{
    try{
        res.json('get id of a car')
    } catch (err){
        next(err)
    }
})

router.post('/', async (req, res, next) =>{
    try{
        res.json('post new car')
    } catch (err){
        next(err)
    }
})






router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;
