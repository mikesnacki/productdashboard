import React, {useState} from 'react';
import axios from 'axios'
import UserStoryPreview from './userStoriesPreview'
import UserStoryDetail from "./userStoriesDetail"

const UserProjects =({ project })=>{

    const pid = project._id

    const [isProjectDeleted, setIsProjectDeleted] = useState(false)
    const [addStoryModal, setAddStoryModal] = useState(false)

    const projectInputs = {
        userName: project.userName,
        projectName: project.projectName,
        projectDescription: project.projectDescription,
        projectDeleted: isProjectDeleted
    }

    const storyDataInputs = {
        storyName: "",
        storyPriority: "",
        storyEstimate: "",
        storyUserDescription: "",
        storyFunctionality: "",
        storyBenefit: "",
        storyAcceptanceCriteriaBegin: "",
        storyAcceptanceCriteriaAction: "",
        storyAcceptanceCriteriaOutcome: "",
        storyStatus: "",
    }

    const [storyData, setStoryData] = useState(storyDataInputs)
    const [projectData, setProjectData] = useState(projectInputs)

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

    const updateProject = async () => {
        console.log(projectData)
        await axios.post(`/api/projects/${pid}/editproject`, {...projectData})
    }

    const addStory = async () => {
        await axios.post(`/api/projects/${pid}/addstory`, {...storyData})
        .then(res=> console.log(res.data))
        .then(project.projectStories.push(storyData))
        .catch(err=>console.log(err))
        setAddStoryModal(false)
    }

    return (
        <div className="user-project-container">
            {
            addStoryModal && 
                <UserStoryDetail
                    story={storyDataInputs}
                    handleChange={handleChange}
                    setProjectData={setProjectData}
                    addStory={addStory}
                    mode="add"
                />
            }
            <input 
                onChange={handleChange}
                name="projectName"
                placeholder="Project Name"
                className="user-project-header align-center" defaultValue={project.projectName}>
            </input>
            <textarea 
                onChange={handleChange}
                name="projectDescription"
                placeholder="Project Description"
                className="user-project-description align-center" defaultValue={project.projectDescription}>
            </textarea>
            <div className="flex-row space-around">
            {project.projectStories.filter(story=>story.storyDeleted!==true).map((story, key)=>
                <UserStoryPreview
                    key={key}
                    story={story}
                    projectId={project._id}
                />    
            )}
            </div>
            <div className="flex-row-no-wrap space-around">
                <button 
                    onClick={()=>setAddStoryModal(true)}
                    className="user-project-button button-left">
                    Add A Story
                </button>
                <button 
                    type="submit"
                    onClick={()=>updateProject(project._id)}
                    className="user-project-button">
                    Update Project
                </button>        
                <button 
                    type="submit"
                    onClick={()=>setIsProjectDeleted(true)}
                    className="user-project-button button-right">
                    Delete Project
                </button>
            </div>
        </div>
    )
}

export default UserProjects