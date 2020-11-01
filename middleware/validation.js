const validation = (req,res,next)=>{


    req.patsy= "I love Patrice Roberts";
    next();
   
}


module.exports = validation;