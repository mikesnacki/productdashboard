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
            <div className="flex-row-no-wrap space-around">
                <button className="user-project-button button-left">Add A Story</button>
                <button className="user-project-button">Update Project</button>        
                <button className="user-project-button button-right">Delete Project</button>
            </div>
        </div>
    )
}

export default UserProjects