import React from 'react';

const UserStory =({ handleChange, updateStory, deleteStory, addStory, setDetailsDisplayed, story, mode })=>{

    return (
        <div className="user-story modal">
            <form className="user-story-details">
                <div className="user-story-header-preview flex-row space-between">
                    <input 
                        name="storyName"
                        className="" 
                        placeholder="Story Name" 
                        onChange={handleChange}
                        defaultValue={story.storyName}>
                    </input>
                    <button 
                        type="submit"
                        onClick={()=>setDetailsDisplayed(null)}
                        className="user-story-button-preview user-story-button-preview-close">
                        &times;
                    </button>
                </div>
                <div className="flex-row-center">
                    <select
                        name="storyPriority"
                        className="align-center user-inputs" 
                        placeholder="Priority" 
                        onChange={handleChange}
                        defaultValue={story.storyPriority}>
                        <option value="" disabled>Priority</option>
                        <option value="Low">Low Priority</option>
                        <option value="Medium">Medium Priority</option>
                        <option value="High">High Priority</option>
                    </select>
                    <select 
                        name="storyEstimate"
                        className="align-center user-inputs" 
                        placeholder="Estimate" 
                        onChange={handleChange}
                        defaultValue={story.storyEstimate}>
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
                        onChange={handleChange} 
                        defaultValue={story.storyUserDescription}>
                    </input>
                    <input 
                        name="storyFunctionality"
                        className="align-center user-inputs" 
                        placeholder="Functionality" 
                        onChange={handleChange}
                        defaultValue={story.storyFunctionality}>
                    </input>
                    <input 
                        name="storyBenefit"
                        className="align-center user-inputs" 
                        placeholder="Benefit" 
                        onChange={handleChange}
                        defaultValue={story.storyBenefit}>
                    </input>
                    <input 
                        name="storyAcceptanceCriteriaBegin"
                        className="align-center user-inputs" 
                        placeholder="Acceptance Criteria" 
                        onChange={handleChange}
                        defaultValue={story.storyAcceptanceCriteriaBegin}>
                    </input>
                    <input 
                        name="storyAcceptanceCriteriaAction"
                        className="align-center user-inputs" 
                        placeholder="Accpetance Criteria Action"
                        onChange={handleChange} 
                        defaultValue={story.storyAcceptanceCriteriaAction}>
                    </input>
                    <input 
                        name="storyAcceptanceCriteriaOutcome"
                        className="align-center user-inputs" 
                        placeholder="Acceptance Criteria Outcome" 
                        onChange={handleChange}
                        defaultValue={story.storyAcceptanceCriteriaOutcome}>
                    </input>
                    <select 
                        name="storyStatus"
                        className="align-center user-inputs" 
                        placeholder="Statuse" 
                        onChange={handleChange}
                        defaultValue={story.storyStatus}>
                        <option value="" disabled>Status</option>
                        <option value="Active">Active</option>
                        <option value="Dead">Dead</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="flex-row-no-wrap space-around">
                    {mode === "edit" ? 
                    <>
                    <button 
                        type="button"
                        onClick={()=>updateStory(story._id)}
                        className="user-story-button button-left">
                        Update Story
                    </button>        
                    <button 
                        type="button"
                        onClick={()=>deleteStory(story._id)}
                        className="user-story-button button-right">
                        Delete Story
                    </button>
                    </>
                    :                  
                    <button 
                        type="button"
                        onClick={()=>addStory()}
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