import { IStory } from "../Interfaces/IStory"

const Stories =(mode: string, story?: any )=>{

     return {
        storyID : mode === "add" ? "" : story._id,
        storyName: mode === "add" ? "" : story.storyName,
        storyPriority: mode === "add" ? "" : story.storyPriority,
        storyEstimate: mode === "add" ? "" : mode === "add" ? "" :story.storyEstimate,
        storyUserDescription: mode === "add" ? "" : story.storyUserDescription,
        storyFunctionality: mode === "add" ? "" : story.storyFunctionality,
        storyBenefit: mode === "add" ? "" :story.storyBenefit,
        storyAcceptanceCriteriaBegin: mode === "add" ? "" : story.storyAcceptanceCriteriaBegin,
        storyAcceptanceCriteriaAction: mode === "add" ? "" : story.storyAcceptanceCriteriaAction,
        storyAcceptanceCriteriaOutcome:  mode === "add" ? "" :story.storyAcceptanceCriteriaOutcome,
        storyStatus: mode === "add" ? "" : story.storyStatus,
        storyPriorityNumeric: mode === "add" ? "" : story.storyPriorityNumeric,
    }
}

export default Stories
