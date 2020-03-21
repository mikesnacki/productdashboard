import React from 'react';

const UserStory =({
                    storyName,storyPriority,storyEstimate,storyUserDescription,
                    storyFunctionality,storyBenefit,storyAcceptanceCriteriaBegin,
                    storyAcceptanceCriteriaAction,storyAcceptanceCriteriaOutcome })=>{
    return (
        <div className="user-story">
            <div className="flex-row-center">
                <input className="align-center user-inputs story-name" placeholder="Name" defaultValue={storyName}></input>
            </div>
            <div className="flex-row-center">
                <input className="align-center user-inputs" placeholder="Priority" defaultValue={storyPriority}></input>
                <input className="align-center user-inputs" placeholder="Estimate" defaultValue={storyEstimate}></input>
                <input className="align-center user-inputs" placeholder="User Description" defaultValue={storyUserDescription}></input>
                <input className="align-center user-inputs" placeholder="Functionality" defaultValue={storyFunctionality}></input>
                <input className="align-center user-inputs" placeholder="Benefit" defaultValue={storyBenefit}></input>
                <input className="align-center user-inputs" placeholder="Acceptance Criteria" defaultValue={storyAcceptanceCriteriaBegin}></input>
                <input className="align-center user-inputs" placeholder="Priority" defaultValue={storyPriority}></input>
                <input className="align-center user-inputs" placeholder="Accpetance Criteria Action" defaultValue={storyAcceptanceCriteriaAction}></input>
                <input className="align-center user-inputs" placeholder="Acceptance Criteria Outcome" defaultValue={storyAcceptanceCriteriaOutcome}></input>
            </div>
            <div className="flex-row-center">
                <button className="user-buttons">Update Story</button>
            </div>
            <div className="flex-row-center">           
                <button className="user-buttons">Delete Story</button>
            </div>
        </div>
    )
}

export default UserStory