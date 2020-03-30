const storyDataInputs =(story)=>{

     return {
        storyID : story === undefined ? "" : story._id,
        storyName: story === undefined ? "" : story.storyName,
        storyPriority: story === undefined ? "" : story.storyPriority,
        storyEstimate: story === undefined ? "" : story === undefined ? "" :story.storyEstimate,
        storyUserDescription: story === undefined ? "" : story.storyUserDescription,
        storyFunctionality: story === undefined ? "" : story.storyFunctionality,
        storyBenefit: story === undefined ? "" :story.storyBenefit,
        storyAcceptanceCriteriaBegin: story === undefined ? "" : story.storyAcceptanceCriteriaBegin,
        storyAcceptanceCriteriaAction: story === undefined ? "" : story.storyAcceptanceCriteriaAction,
        storyAcceptanceCriteriaOutcome:  story === undefined ? "" :story.storyAcceptanceCriteriaOutcome,
        storyStatus: story === undefined ? "" : story.storyStatus,
    }
}

export default storyDataInputs
