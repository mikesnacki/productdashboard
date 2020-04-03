import React  from 'react';
import { useFetch } from "../utilhooks/useFetch"
import UserProjects from "./UserProjects"
import { useAuth0  } from "../utilhooks/useAuth"
import Loading from "./Loading"

export default function StoriesPage(){
    const { loading, user } = useAuth0();
    let userInfo = []
    let res = useFetch(`/api/projects/${user !== undefined && user.email}`)

    if (!res.error && !res.loading) {
        userInfo = res.response;
    }
    
    if (loading) {
      return <Loading/>
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