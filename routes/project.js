const express=  require("express");
const router = express.Router();

const projectsController = require("../controllers/project");


router.get("/",projectsController.getProjects)

router.post("/",projectsController.createANewProject)

router.get("/:id", projectsController.getProjectById)

router.put("/:id", projectsController.updateProjectById)

router.delete("/:id",projectsController.deleteProjectByID)



module.exports = router;