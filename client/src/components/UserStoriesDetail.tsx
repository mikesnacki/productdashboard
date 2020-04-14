import React from 'react';
import {IStoryActions} from "../Interfaces/IStoryActions"

const UserStory=(story: IStoryActions)=>{

    return (
        <div className="user-story modal">
            <form className="user-story-details">
                <div className="user-story-header-preview flex-row space-between">
                    <input 
                        name="storyName"
                        className="" 
                        placeholder="Story Name" 
                        onChange={story.handleChange}
                        defaultValue={story.storyData.storyName}>
                    </input>
                    {story.mode === "add" ? <button 
                        type="button"
                        onClick={()=>story.setAddStoryModal(false)}
                        className="user-story-button-preview-close button-clear">
                        &times;
                    </button> :
                    <button 
                        type="button"
                        onClick={()=>story.setDetailsDisplayed("")}
                        className="user-story-button-preview-close button-clear">
                        &times;
                    </button>}
                </div>
                <div className="flex-row-center">
                    <select
                        name="storyPriority"
                        className="align-center user-inputs" 
                        placeholder="Priority" 
                        onChange={story.handleChange}
                        defaultValue={story.storyData.storyPriority}>
                        <option value="" disabled>Priority</option>
                        <option value="Low">Low Priority</option>
                        <option value="Medium">Medium Priority</option>
                        <option value="High">High Priority</option>
                    </select>
                    <select 
                        name="storyEstimate"
                        className="align-center user-inputs" 
                        placeholder="Estimate" 
                        onChange={story.handleChange}
                        defaultValue={story.storyData.storyEstimate}>
                        <option value="" disabled>Time Estimate</option>
                        <option value="1">1 Week</option>
                        <option value="2">2 Weeks</option>
                        <option value="3">3 Weeks</option>
                        <option value="4">4 Weeks</option>
                        <option value="5">5 Weeks</option>
                        <option value="6">6 Weeks</option>
                        <option value="7">7 Weeks</option>
                        <option value="7">8 Weeks</option>
                    </select>
                    <input 
                        name="storyUserDescription"
                        className="align-center user-inputs" 
                        placeholder="User Description"
                        onChange={story.handleChange} 
                        defaultValue={story.storyData.storyUserDescription}>
                    </input>
                    <input 
                        name="storyFunctionality"
                        className="align-center user-inputs" 
                        placeholder="Functionality" 
                        onChange={story.handleChange}
                        defaultValue={story.storyData.storyFunctionality}>
                    </input>
                    <input 
                        name="storyBenefit"
                        className="align-center user-inputs" 
                        placeholder="Benefit" 
                        onChange={story.handleChange}
                        defaultValue={story.storyData.storyBenefit}>
                    </input>
                    <input 
                        name="storyAcceptanceCriteriaBegin"
                        className="align-center user-inputs" 
                        placeholder="Acceptance Criteria" 
                        onChange={story.handleChange}
                        defaultValue={story.storyData.storyAcceptanceCriteriaBegin}>
                    </input>
                    <input 
                        name="storyAcceptanceCriteriaAction"
                        className="align-center user-inputs" 
                        placeholder="Accpetance Criteria Action"
                        onChange={story.handleChange} 
                        defaultValue={story.storyData.storyAcceptanceCriteriaAction}>
                    </input>
                    <input 
                        name="storyAcceptanceCriteriaOutcome"
                        className="align-center user-inputs" 
                        placeholder="Acceptance Criteria Outcome" 
                        onChange={story.handleChange}
                        defaultValue={story.storyData.storyAcceptanceCriteriaOutcome}>
                    </input>
                    <select 
                        name="storyStatus"
                        className="align-center user-inputs" 
                        placeholder="Statuse" 
                        onChange={story.handleChange}
                        defaultValue={story.storyData.storyStatus}>
                        <option value="" disabled>Status</option>
                        <option value="Active">Active</option>
                        <option value="Dead">Dead</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="flex-row-no-wrap space-around">
                    {story.mode === "edit" ? 
                    <>
                    <button 
                        type="button"
                        onClick={()=>story.updateStory(story.storyData._id)}
                        className="user-story-button button-left">
                        Update Story
                    </button>        
                    <button 
                        type="button"
                        onClick={()=>story.deleteStory(story.storyData._id)}
                        className="user-story-button button-right">
                        Delete Story
                    </button>
                    </>
                    :                  
                    <button 
                        type="button"
                        onClick={()=>story.addStory()}
                        className="user-story-button">
                        Add Story
                    </button>
                    }
                </div>
            </form>
        </div>
    )
}

export default UserStory
