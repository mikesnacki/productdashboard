import React from 'react';
import UserStory from './userStories'

const UserProjects =({res, projectDeleted, projectID, projectName, projectStories})=>{

    return (
        <div className="user-project-container">
            <h2>{projectName}</h2>
            <p>{projectID}</p>
            <p>{projectDeleted}</p>
            {!res.error && !res.loading && res.response.length >0 && (projectStories).map((stor, key)=>
                <UserStory
                    key={key}
                    storyName = {stor.storyName}
                    storyPriority = {stor.storyPriority}
                    storyEstimate = {stor.storyEstimate}
                    storyUserDescription = {stor.storyUserDescription}
                    storyFunctionality = {stor.storyFunctionality}
                    storyBenefit = {stor.storyFunctionality}
                    storyAcceptanceCriteriaBegin = {stor.storyAcceptanceCriteriaBegin}
                    storyAcceptanceCriteriaAction = {stor.storyAcceptanceCriteriaAction}
                    storyAcceptanceCriteriaOutcome = {stor.storyAcceptanceCriteriaAction}
                />    
            )}
        </div>
    )
}

export default UserProjects