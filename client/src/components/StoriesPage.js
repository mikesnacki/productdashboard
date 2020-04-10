import React, {FC}  from 'react';
import { useSecureFetch } from "../utilhooks/useSecureFetch"
import UserProjects from "./UserProjects"
import { useAuth0 } from "../utilhooks/useAuth"
import Loading from "./Loading"
import  { IProject } from "../Interfaces/IProject"


const StoriesPage =()=>{
    const { loading, user } = useAuth0();
    let userInfo = [];
    let res = useSecureFetch(`/api/projects/${user !== undefined && user.email}`);

    if (!res.error && !res.loading) {
        userInfo = res.response;
    }
    
    if (loading) {
      return <Loading/>;
    }
  
    return(
        <div>
            {
            !res.error && !res.loading && res.response.length >0 &&
                userInfo.map((project, key)=>
                    <UserProjects
                        key={key}
                        project={project}/>)
            }
            {
            !res.error && !res.loading && res.response.length ===0 &&
                <UserProjects/>
            }
        </div>
    )
}

export default StoriesPage
