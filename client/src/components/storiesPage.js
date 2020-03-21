import React, {useState} from 'react';
import { useFetch } from "../utilhooks/useFetch"
import UserProjects from "./userProjects"

export default function StoriesPage(){

    let userInfo = []

    let res = useFetch(`http://localhost:4000/api/users/`)

    if (!res.error && !res.loading) {
        userInfo = res.response[0];
    } 

    return(
        <div className="stories-page">
            {!res.error && !res.loading && res.response.length >0 &&
                userInfo.userProjects.map((proj, key)=>
                    <UserProjects
                        key={key}
                        projectID={proj._id}
                        projectName={proj.projectName}
                        projectDeleted={proj.projectDeleted}
                        projectStories={proj.projectStories}
                        res={res}
                    />
                )
            }
        </div>
    )
}