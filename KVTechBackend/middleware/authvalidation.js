const joi = require('joi')

const signupvalidation = (req,res,next) => {
    const schema = joi.object({
        name : joi.string().min(3).max(100).required(),
        email : joi.string().email().required(),
        password : joi.string().min().max(100).required()
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
            .json({message : "Bad Requesr",error})
    }
    next()
}

const loginvalidation = (req,res,next) => {
    const schema = joi.object({
        email : joi.string().email().required(),
        password : joi.string().min().max(100).required()
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
            .json({message : "Bad Requesr",error})
    }
    next()
}

module.exports = {
    signupvalidation,
    loginvalidation
}