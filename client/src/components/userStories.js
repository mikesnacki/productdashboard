import React, {useState} from 'react';
import { useFetch } from "../utilhooks/useFetch"

const UserStory =({
                    storyName,
                    storyPriority,
                    storyEstimate,
                    storyUserDescription,
                    storyFunctionality,
                    storyBenefit,
                    storyAcceptanceCriteriaBegin,
                    storyAcceptanceCriteriaAction,
                    storyAcceptanceCriteriaOutcome,})=>{
    return (
        <div>
            <h2>{storyName}</h2>
            <p>{storyPriority}</p>
            <p>{storyEstimate}</p>
            <p>{storyUserDescription}</p>
            <p>{storyFunctionality}</p>
            <p>{storyBenefit}</p>
            <p>{storyAcceptanceCriteriaBegin}</p>
            <p>{storyPriority}</p>
            <p>{storyAcceptanceCriteriaAction}</p>
            <p>{storyAcceptanceCriteriaOutcome}</p>
        </div>
    )
}

const UserProjects =({projectDeleted, projectID, projectName, projectStories})=>{
    return (
        <div>
            <h2>{projectName}</h2>
            {(projectStories.map((key, stor)=>
                <UserStory
                    key={key}
                    storyName={stor.storyName}
                    storyPriority={stor.storyPriority}
                    storyPriority={stor.storyPriority}
                    storyEstimate={stor.storyEstimate}
                    storyUserDescription={stor.storyUserDescription}
                    storyFunctionality={stor.storyFunctionality}
                    storyBenefit={stor.storyBenefit}
                    storyAcceptanceCriteriaBegin={stor.storyAcceptanceCriteriaBegin}
                    storyPriority={stor.storyPriority}
                    storyAcceptanceCriteriaAction={stor.storyAcceptanceCriteriaAction}
                    storyAcceptanceCriteriaOutcome={stor.storyAcceptanceCriteriaOutcome}
                />)
            )}
        </div>
    )
}

export default function UserStories(){

    let userInfo = []

    let res = useFetch(`http://localhost:4000/api/users/`)

    if (!res.error && !res.loading) {
        userInfo = res.response[0];
        console.log(userInfo)
    } 

    return(
        <div>
            {!res.error && !res.loading && res.response.length >0 &&
                userInfo.userProjects.map((proj, key)=>
                    <UserProjects
                        key={key}
                        id={proj.projectID}
                        projectName={proj.projectName}
                        projectDeleted={proj.projectDeleted}
                        projectStories={proj.projectStories}
                    />
                )
            }
        </div>
    )
}