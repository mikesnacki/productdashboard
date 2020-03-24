import React from 'react';
import UserStory from './userStories'

const UserProjects =({ project })=>{

    return (
        <div className="user-project-container">
            <input className="user-project-header align-center" defaultValue={project.projectName}></input>
            {project.projectStories.map((story, key)=>
                <UserStory
                    key={key}
                    story={story}
                    projectId={project._id}
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