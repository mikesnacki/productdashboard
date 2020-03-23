import React from 'react';
import UserStory from './userStories'

const UserProjects =({ userID, project })=>{

    return (
        <div className="user-project-container">
            <input className="user-project-header align-center" defaultValue={project.projectName}></input>
            {project.projectStories.map((story, key)=>
                <UserStory
                    key={key}
                    story={story}
                    userID={userID}
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