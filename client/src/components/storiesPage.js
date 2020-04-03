import React  from 'react';
import { useFetch } from "../utilhooks/useFetch"
import UserProjects from "./UserProjects"
import { useAuth0  } from "../utilhooks/useAuth"
import Login from "./Login"

export default function StoriesPage(){
    let userInfo = []
    let res = useFetch(`/api/projects/`)

    if (!res.error && !res.loading) {
        userInfo = res.response;
    }
    
    const { loading, user } = useAuth0();

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
        return <Login/>;
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