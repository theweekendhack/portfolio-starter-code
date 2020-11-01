

const projectModel = require("../models/project.js");

exports.getProjects = (req,res)=>{

    projectModel.find()
    .then(projects=>{
    
        res.status(200).json({
            data:projects,
            message:"List of all projects",
            totalNumberOfProjects : projects.length
        })

    })
    .catch(err=>{

        res.status(500).json({
            message:`Error occured when getting projects ${err}`
        })
    })



};


exports.createANewProject = (req,res)=>{

    const newProject = {
        title: req.body.title,
        description: req.body.description,
        link : req.body.link,
        technologies: req.body.technologies,
        type: req.body.type

    }

    const project  = new projectModel(newProject);

    project.save()
    .then(pro=>{

        res.status(200).json({
            data:pro,
            message:"Your project was created successfully"
           
        })   
    })
    .catch(err=>{

        res.status(500).json({
            message:`Error occured when getting projects ${err}`
        })
    })
};


exports.getProjectById = (req,res)=>{

    res.send("Get a specific project")
};


exports.updateProjectById = (req,res)=>{

    projectModel.findByIdAndUpdate(req.params.id,{
        type : req.body.type
    })
    .then(()=>{

        res.status(200).json({
            message:`You project was updated`
        })  
    })
    .catch(err=>{
        res.status(500).json({
            message:`Error occured when getting projects ${err}`
        })
    })
    
};


exports.deleteProjectByID = (req,res)=>{

   projectModel.findByIdAndDelete(req.params.id)
   .then(()=>{

    res.status(200).json({
        message:`You project with the id ${req.params.id} was deleted`
    })   
   })
   .catch(err=>{

    res.status(500).json({
        message:`Error occured when getting projects ${err}`
    })
})

};

module.export 


//MEN