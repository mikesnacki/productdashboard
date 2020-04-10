import { IProject } from "../Interfaces/IProject"

const projectDataInputs =(project: IProject | undefined)=>{
     return {
        projectID : project === undefined ? "" : project._id,
        userName: project === undefined ? "" : project.userName,
        projectName: project === undefined ? "" : project.projectName,
        projectDescription:project === undefined ? "" :  project.projectDescription,
        projectDeleted: project === undefined ? "" : project.isProjectDeleted,
        projectStories:project === undefined ? [] : project.projectStories,
    }
}

export default projectDataInputs
