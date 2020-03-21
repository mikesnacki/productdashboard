import React from 'react';
import UserStory from './userStories'

const UserProjects =({ project })=>{

    return (
        <div className="user-project-container">
            <input className="user-project-header align-center" defaultValue={project.projectName}></input>
            <p>{project.projectID}</p>
            <p>{project.projectDeleted}</p>
            {project.projectStories.map((story, key)=>
                <UserStory
                    key={key}
                    story={story}
                />    
            )}
            <div className="flex-row-no-wrap space-between">
                <button className="user-buttons">Update Project</button>        
                <button className="user-buttons">Delete Project</button>
                <button className="user-buttons">Add A Story</button>
            </div>
        </div>
    )
}

export default UserProjects