
import { IProject } from "../Interfaces/IProject"

const Projects =(project?: IProject )=>{
     return {
        projectID : !project ? "" : project._id,
        userName: !project ? "" : project.userName,
        projectName: !project ? "" : project.projectName,
        projectDescription: !project ? "" : project.projectDescription,
        projectDeleted: !project ? "" : project.isProjectDeleted,
        projectStories: !project ? [] : project.projectStories,
    }
}

export default Projects
