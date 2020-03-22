import React, { useState } from 'react';
import axios from 'axios';

const UserStory =({ story })=>{

    const storyDataInputs = {
        storyName: story.storyName,
        storyPriority: story.storyPriority,
        storyEstimate: story.storyEstimate,
        storyUserDescription: story.storyUserDescription,
        storyFunctionality: story.storyFunctionality,
        storyBenefit: story.storyBenefit,
        storyAcceptanceCriteriaBegin: story.storyAcceptanceCriteriaBegin,
        storyAcceptanceCriteriaAction: story.storyAcceptanceCriteriaAction,
        storyAcceptanceCriteriaOutcome: story.storyAcceptanceCriteriaOutcome,
    }

    const [storyData, setStoryData] = useState(storyDataInputs)

    const handleChange=(e)=> {
        const name = e.target.name;
        const defaultValue = e.target.value;
        setStoryData(prevState=>({
            ...prevState,
            [name]:defaultValue,
            })
        )
    }

    const updateStory = async (id) => {
        console.log(id)
        console.log(storyData)
    }


    return (
        <div className="user-story">
            <div className="user-story-header flex-row">
                <input 
                    name="storyName"
                    className="align-center user-story-header" 
                    placeholder="Name" 
                    onChange={handleChange}
                    defaultValue={story.storyName}>
                </input>
            </div>
            <div className="flex-row-center">
                <select
                    name="storyPriority"
                    className="align-center user-inputs" 
                    placeholder="Priority" 
                    onChange={handleChange}
                    defaultValue={story.storyPriority}>
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
            </div>
            <div className="flex-row-no-wrap space-around">
                <button 
                    onClick={()=>updateStory(story._id)}
                    className="user-story-button button-left">
                    Update Story
                </button>        
                <button 
                    className="user-story-button button-right">
                    Delete Story
                </button>
            </div>
        </div>
    )
}

export default UserStory