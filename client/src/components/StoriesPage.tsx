import React  from 'react';
import { useSecureFetch } from "../utilhooks/useSecureFetch"
import UserProjects from "./UserProjects"
import { useAuth0 } from "../utilhooks/useAuth"
import Loading from "./Loading"
import {IProject} from "../Interfaces/IProject"

const StoriesPage =()=>{
    const { loading, user } = useAuth0();
    let response = useSecureFetch(`/api/projects/${user !== undefined && user.email}`);

    if (response.loading || loading) {
      return <Loading/>;
    } 

    return(
        <div>
            {!response.error && !response.loading && response.results.length >0 &&
            response.results.map((project: IProject, key: number)=>
                    <UserProjects
                        key={key}
                        project={project}/>)
            } 
            {!response.error && !response.loading && response.results.length ===0 &&
                <UserProjects/>
            }
        </div>
    )
}

export default StoriesPage
