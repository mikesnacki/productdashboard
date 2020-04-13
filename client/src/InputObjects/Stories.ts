import { IStory } from "../Interfaces/IStory"

const Stories =(story?: IStory )=>{

        return {
            _id : !story ? "" : story._id,
            storyName: !story ? "" : story.storyName,
            storyPriority: !story ? "" : story.storyPriority,
            storyEstimate: !story ? +"" : story.storyEstimate,
            storyUserDescription: !story ? "" : story.storyUserDescription,
            storyFunctionality: !story ? "" : story.storyFunctionality,
            storyBenefit: !story ? "" : story.storyBenefit,
            storyAcceptanceCriteriaBegin: !story ? "" : story.storyAcceptanceCriteriaBegin,
            storyAcceptanceCriteriaAction: !story ? "" : story.storyAcceptanceCriteriaAction,
            storyAcceptanceCriteriaOutcome: !story ? "" : story.storyAcceptanceCriteriaOutcome,
            storyStatus: !story ? "" : story.storyStatus,
            storyPriorityNumeric: !story ? +"" : story.storyPriorityNumeric,
        } 
}

export default Stories
