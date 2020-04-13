import React, { useContext, createContext } from 'react'
import { IProject } from "../Interfaces/IProject"
import { useAuth0 } from "../utilhooks/useAuth"
import { useSecureFetch } from "../utilhooks/useSecureFetch"


export interface userData {
    userName?: string,
    userAuthenticated: boolean,
    loading?: boolean,
    error?: boolean,
    projectStories?: Array <IProject>,
}

const { user } = useAuth0(); 
const response = useSecureFetch(`/api/projects/${user !== undefined && user.email}`);

export const UserContext = createContext<userData> ({
    userName: "",
    userAuthenticated: false,
    loading: false,
    error: false,
    projectStories: []
})

