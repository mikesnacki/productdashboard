import React from 'react';

const UserStory =({ story })=>{
    return (
        <div className="user-story">
            <div className="user-story-header flex-row-no-wrap space-between">
                <button className="user-story-button">Update</button>   
                <input className="align-center" placeholder="Name" defaultValue={story.storyName}></input>
                <button className="user-story-button">Delete</button>
            </div>
            <div className="flex-row-center">
                <input className="align-center user-inputs" placeholder="Priority" defaultValue={story.storyPriority}></input>
                <input className="align-center user-inputs" placeholder="Estimate" defaultValue={story.storyEstimate}></input>
                <input className="align-center user-inputs" placeholder="User Description" defaultValue={story.storyUserDescription}></input>
                <input className="align-center user-inputs" placeholder="Functionality" defaultValue={story.storyFunctionality}></input>
                <input className="align-center user-inputs" placeholder="Benefit" defaultValue={story.storyBenefit}></input>
                <input className="align-center user-inputs" placeholder="Acceptance Criteria" defaultValue={story.storyAcceptanceCriteriaBegin}></input>
                <input className="align-center user-inputs" placeholder="Priority" defaultValue={story.storyPriority}></input>
                <input className="align-center user-inputs" placeholder="Accpetance Criteria Action" defaultValue={story.storyAcceptanceCriteriaAction}></input>
                <input className="align-center user-inputs" placeholder="Acceptance Criteria Outcome" defaultValue={story.storyAcceptanceCriteriaOutcome}></input>
            </div>
        </div>
    )
}

export default UserStory