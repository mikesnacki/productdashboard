
import { IProject } from "../Interfaces/IProject"

const Projects =(mode: string, project: IProject )=>{
     return {
        projectID : mode === "add" ? "" : project._id,
        userName: mode === "add" ? "" : project.userName,
        projectName: mode === "add" ? "" : project.projectName,
        projectDescription:mode === "add" ? "" : project.projectDescription,
        projectDeleted: mode === "add" ? "" : project.isProjectDeleted,
        projectStories: mode === "add" ? [] : project.projectStories,
    }
}

export default Projects
