
import { IProject } from "../Interfaces/IProject"

const Projects =(project?: IProject )=>{
     return {
        _id : !project ? "" : project._id,
        userName: !project ? "" : project.userName,
        projectName: !project ? "" : project.projectName,
        projectDescription: !project ? "" : project.projectDescription,
        projectDeleted: !project ? "" : project.projectDeleted,
        projectStories: !project ? [] : project.projectStories,
    }
}

export default Projects
