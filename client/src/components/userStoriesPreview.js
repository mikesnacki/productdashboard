import React, { useState } from 'react';
import axios from 'axios';
import { FaArrowUp, FaArrowsAltH, FaArrowDown, FaCalendar} from 'react-icons/fa';
import UserStoryDetail from "./userStoriesDetail"


const UserStoryPreview =({ projectId, story })=>{

    const [detailsDisplayed, setDetailsDisplayed] = useState(null)

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
        storyStatus: story.storyStatus,
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
        id !== undefined && await axios.post(`/api/projects/${projectId}/editstory/${id}`, {...storyData})
                                        .then(setDetailsDisplayed(null))
                                        .catch(err=>console.log(err))
        
    }

    const deleteStory = async (id) => {
        await axios.post(`/api/projects/${projectId}/deletestory/${id}`, {...storyData})
                    .then(setDetailsDisplayed(null))
                    .catch(err=>console.log(err))
    }

    const priorityIcons = {
        "High": <FaArrowUp/>,
        "Medium":<FaArrowsAltH/>,
        "Low": <FaArrowDown/>
    }

    return (
        <div>
            <div className="user-story">
                <div className="user-story-header-preview flex-row space-around">
                    <div>
                        {story.storyName}
                    </div>
                </div>
                <div className="flex-row-center">
                    <div>
                        {storyData.storyPriority} {priorityIcons[story.storyPriority]}
                    </div>
                    <div>
                        {storyData.storyEstimate} <FaCalendar/>
                    </div>
                    <div>
                        {storyData.storyStatus}
                    </div>
                </div>
                <div className="flex-row-no-wrap">
                    <button 
                    type="button"
                        onClick={()=>setDetailsDisplayed(story._id)}
                        className="user-story-button-preview">
                        Show and Edit Story Details
                    </button>        
                </div>
            </div>
            {story._id === detailsDisplayed && 
                <UserStoryDetail 
                    story={story} 
                    handleChange={handleChange}
                    updateStory={updateStory}
                    deleteStory={deleteStory}
                    setDetailsDisplayed={setDetailsDisplayed}
                    mode="edit"
                />
            }
        </div>
    )
}

export default UserStoryPreview