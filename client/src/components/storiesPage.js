import React, {useState}  from 'react';
import { useFetch } from "../utilhooks/useFetch"
import UserProjects from "./userProjects"

export default function StoriesPage(){
    let userInfo = []
    let res = useFetch(`/api/projects/`)

    if (!res.error && !res.loading) {
        userInfo = res.response;
    }   
    
    return(
        <div>
            {!res.error && !res.loading && res.response.length >0 &&
                userInfo.map((project, key)=>
                    <UserProjects
                        key={key}
                        project={project}
                    />
                )
            }
        </div>
    )
}