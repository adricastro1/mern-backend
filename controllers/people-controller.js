const {People} = require('../models')
// const PeopleModel = require('../models/People')

// CONTROLLER ACTION

// INDEX
async function index(req, res, next){
    try{
        res.status(200).json(await People.find())
    }catch(err){
        res.status(400).json({error: err.message})
    }
}



// CREATE
async function create(req, res, next){
    try{
        res.status(201).json(await People.create(req.body))
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

// DETAIL
async function detail(req, res, next){
    try{
        res.status(200).json(await People.findById(req.params.id))
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

// DESTROY
async function destroy(req, res, next){
    try{
        res.status(200).json(await People.findByIdAndDelete(req.params.id))
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

// UPDATE
async function update(req, res, next){
    try{
        res.status(200).json(await People.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

module.exports = {
    index,
    create,
    getOne: detail,
    delete: destroy,
    update
}