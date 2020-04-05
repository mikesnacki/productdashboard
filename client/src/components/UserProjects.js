import React, { useState } from 'react';
import axios from 'axios'
import UserStoryPreview from './UserStoriesPreview'
import UserStoryDetail from "./UserStoriesDetail"
import storyDataInputs from "./storyDataInputs"
import projectDataInputs from "./projectDataInputs"
import { css } from 'emotion'

const UserProjects =({ project })=>{

    const [addStoryModal, setAddStoryModal] = useState(false)
    const [storyData, setStoryData] = useState(storyDataInputs())
    const [projectData, setProjectData] = useState(projectDataInputs(project))

    const handleChange=(e)=> {
        const name = e.target.name;
        const defaultValue = e.target.value;

        setProjectData(prevState=>({
            ...prevState,
            [name]:defaultValue,
            })
        )
        setStoryData(prevState=>({
            ...prevState,
            [name]:defaultValue,
            })
        )
    }

    const addStory = async () => {
        await axios.post(`/api/projects/${projectData.projectID}/addstory`, {...storyData})
        .then(res=> console.log(res.data))
        .then(project.projectStories.push(storyData))
        .catch(err=>console.log(err))
    }

    const addProject = async () => {
        await axios.post(`/api/projects/addproject`, {...projectData})
        .then(res=> console.log(res.data))
        .catch(err=>console.log(err))
    }

    const updateProject = async () => {
        await axios.post(`/api/projects/${projectData.projectID}/editproject`, {...projectData})
        .then(res=> console.log(res.data))
        .catch(err=>console.log(err))
    }

    const deleteProject = async () => {
        await axios.post(`/api/projects/${projectData.projectID}/deleteproject`, {...projectData})
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
                        width: 100%;
                        height: ${Math.max(projectData.projectDescription.length, 40)}px;
                        margin: 1vh 5vw;
                        border: 0;
                    `}
                    defaultValue={projectData.projectDescription}>
                </textarea>
            </div>
            <div className="flex-row space-around">
            {projectData.projectStories.filter(story=>story.storyDeleted!==true).map((story, key)=>
                <UserStoryPreview
                    key={key}
                    story={story}
                    projectID={projectData.projectID}
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
                    onClick={()=>updateProject(projectData.projectID)}
                    className="user-project-button">
                    Update Project
                </button>        
                <button 
                    type="submit"
                    onClick={()=>deleteProject(projectData.projectID)}
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
