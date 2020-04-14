import React, { useState } from 'react';
import axios from 'axios'
import UserStoryPreview from './UserStoriesPreview'
import UserStoryDetail from "./UserStoriesDetail"
import Stories from "../InputObjects/Stories"
import Projects from "../InputObjects/Projects"
import { IProject } from "../Interfaces/IProject"
import { IStory } from "../Interfaces/IStory"
import { css } from 'emotion'
import { useAuth0 } from "../utilhooks/useAuth"
import {Redirect} from "react-router-dom"


const UserProjects = ({project}:{project?: IProject})=>{

    const [addStoryModal, setAddStoryModal] = useState(false);
    const [storyData, setStoryData] = useState<IStory>(Stories());
    const [projectData, setProjectData] = useState(Projects(project));

    const { user } = useAuth0();

    const handleChange=(e: any)=> {
        const name = e.target.name;
        const defaultValue = e.target.value;

        setProjectData((prevState: any)=>({
            ...prevState,
            userName: user.email,
            [name]:defaultValue,
            })
        )
        setStoryData((prevState:any)=>({
            ...prevState,
            userName: user.email,
            [name]:defaultValue,
            })
        )
    }

    const addStory = async () => {
        await axios.post(`/api/projects/${projectData._id}/addstory`, {...storyData})
        .then(res=> console.log(res.data))
        .catch(err=>console.log(err))
        project?.projectStories.push(storyData)
        return <Redirect to="/projects"/>
    }

    const addProject = async () => {
        await axios.post(`/api/projects/addproject`, {...projectData})
        .then(res=> console.log(res.data))
        .catch(err=>console.log(err))
        return <Redirect to="/projects"/>
    }

    const updateProject = async () => {
        await axios.post(`/api/projects/${projectData._id}/editproject`, {...projectData})
        .then(res=> console.log(res.data))
        .catch(err=>console.log(err))
    }

    const deleteProject = async () => {
        await axios.post(`/api/projects/${projectData._id}/deleteproject`, {...projectData})
        .then(res=> console.log(res.data))
        .catch(err=>console.log(err))
    }

    return (
        <div className="stories-page">
            {project === undefined && <h2 className="align-center">Create a project below. Fill in the name and the description to create user stories.</h2>}
            <div className="user-project-container">
                {
                addStoryModal && 
                    <UserStoryDetail
                        storyData={storyData}
                        handleChange={handleChange}
                        addStory={addStory}
                        mode="add"
                        setAddStoryModal={setAddStoryModal}
                    />
                }
                <input 
                    onChange={handleChange}
                    name="projectName"
                    placeholder="Project Name"
                    className="user-project-header align-center" defaultValue={projectData.projectName}>
                </input>
                <div className="flex-row space-around">
                    <textarea 
                        onChange={handleChange}
                        name="projectDescription"
                        placeholder="Project Description"
                        className={css`
                            box-shadow: 0 4px 6px 1px hsla(0, 0%,0%, 0.2);
                            width: 100%;
                            height: ${Math.max(projectData.projectDescription.length, 40)}px;
                            margin: 1vh 5vw;
                            border: 0;
                        `}
                        defaultValue={projectData.projectDescription}>
                    </textarea>
                </div>
                <div className="flex-row space-around">
                {projectData.projectStories
                            .filter(story => story.storyDeleted !== true)
                            .sort((a, b)=> a.storyPriorityNumeric > b.storyPriorityNumeric ? -1 : a.storyPriorityNumeric < b.storyPriorityNumeric ? 1 : 0)
                            .map((story, key)=>
                    <UserStoryPreview
                        key={key}
                        story={story}
                        _id={projectData._id}
                        setAddStoryModal={setAddStoryModal}
                    />    
                )}
                </div>
                
                <div className="flex-row-no-wrap space-around">
                    {project ?
                    <>
                    <button 
                        onClick={()=>setAddStoryModal(true)}
                        className="user-project-button button-left">
                        Add A Story
                    </button>
                    <button 
                        type="submit"
                        onClick={()=>updateProject()}
                        className="user-project-button">
                        Update Project
                    </button>        
                    <button 
                        type="submit"
                        onClick={()=>deleteProject()}
                        className="user-project-button button-right">
                        Delete Project
                    </button>
                    </>
                    :
                    <button 
                        type="submit"
                        onClick={()=>addProject()}
                        className="user-project-button">
                        Add Project
                    </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserProjects
