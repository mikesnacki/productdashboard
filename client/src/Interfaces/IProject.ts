import { IStory } from "./IStory"

export interface IProject {
    _id: string, 
    userName: string,
    projectName: string,
    projectDescription: string,
    isProjectDeleted: string,
    projectStories: Array <IStory>,
}

export interface IProjects {
    results: IProject[] ,
    loading: boolean,
    error: boolean
}