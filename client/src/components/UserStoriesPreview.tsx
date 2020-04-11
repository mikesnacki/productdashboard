import React, { useState, FC, ReactNode } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowsAltH, faArrowDown, faCalendar} from '@fortawesome/free-solid-svg-icons'
import UserStoryDetail from "./UserStoriesDetail"
import { library } from '@fortawesome/fontawesome-svg-core';
import Stories from "../InputObjects/Stories"

library.add(faArrowUp, faArrowsAltH, faArrowDown, faCalendar)

const UserStoryPreview =( projectID: any, story: any )=>{

    const [detailsDisplayed, setDetailsDisplayed] = useState("")
    const [storyData, setStoryData] = useState(Stories("update", story))

    const handleChange=(e :any)=> {
        const name = e.target.name;
        const defaultValue = e.target.value;
        setStoryData((prevState)=>({
            ...prevState,
            [name]:defaultValue,
            })
        )
    }

    console.log(storyData)

    const updateStory = async (id : any) => {
        id !== undefined && await axios.post(`/api/projects/${projectID}/editstory/${id}`, {...storyData})
        .catch(err=>console.log(err));  
        (setDetailsDisplayed(""))        
    }

    const deleteStory = async (id: any) => {
        await axios.post(`/api/projects/${projectID}/deletestory/${id}`, {...storyData})
                    .catch(err=>console.log(err));
        (setDetailsDisplayed(""))
    }

    const priorityIcons = {
        "High": <FontAwesomeIcon icon={"arrow-up"}/>,
        "Medium":<FontAwesomeIcon icon={"arrows-alt-h"}/>,
        "Low": <FontAwesomeIcon icon={"arrow-down"}/>
    }

    return (
        <div>
            <div className="user-story">
                <div className="user-story-header-preview flex-row space-around">
                    {storyData.storyName.toUpperCase()}
                </div>
                <div className="flex-row-center">
                    {/* <p>
                        {storyData.storyPriority} {priorityIcons[storyData.storyPriority]}
                    </p> */}
                    <span className="fa-icon">
                    <FontAwesomeIcon size="3x" icon={"calendar"}/>
                        <span className="story-est-text" >{storyData.storyEstimate}</span>
                    </span>
                    <p>
                        {storyData.storyStatus}
                    </p>
                </div>
                <div className="flex-row-no-wrap">
                    <button 
                    type="button"
                        onClick={()=>setDetailsDisplayed(storyData.storyID)}
                        className="user-story-button-preview">
                        Show and Edit Story Details
                    </button>        
                </div>
            </div>
            {storyData.storyID === detailsDisplayed && 
                <UserStoryDetail 
                    storyData={storyData} 
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
