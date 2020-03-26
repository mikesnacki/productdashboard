import React, {useState} from 'react';
import axios from 'axios'
import UserStoryPreview from './userStoriesPreview'

const UserProjects =({ project })=>{
    
    const [isProjectDeleted, setIsProjectDeleted] = useState(false)

    const projectInputs = {
        userName: project.userName,
        projectName: project.projectName,
        projectDeleted: isProjectDeleted
    }

    const [projectData, setProjectData] = useState(projectInputs)

    const handleChange=(e)=> {
        const name = e.target.name;
        const defaultValue = e.target.value;
        setProjectData(prevState=>({
            ...prevState,
            [name]:defaultValue,
            })
        )
    }

    const updateProject = async (id) => {
        await axios.post(`http://localhost:4000/api/projects/${id}/editproject`, {...projectData})
    }

    return (
        <div className="user-project-container">
            <input 
                onChange={handleChange}
                name="projectName"
                className="user-project-header align-center" defaultValue={project.projectName}>
            </input>
            <div className="flex-row space-around">
            {project.projectStories.map((story, key)=>
                <UserStoryPreview
                    key={key}
                    story={story}
                    projectId={project._id}
                />    
            )}
            </div>
            <div className="flex-row-no-wrap space-around">
                <button className="user-project-button button-left">Add A Story</button>
                <button 
                    type="submit"
                    onClick={()=>updateProject(project._id)}
                    className="user-project-button">
                    Update Project
                </button>        
                <button 
                    type="submit"
                    onClick={()=>setIsProjectDeleted(true)}
                    className="user-project-button button-right">
                    Delete Project
                </button>
            </div>
        </div>
    )
}

export default UserProjects