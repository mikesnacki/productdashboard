
import {IStory} from "./IStory"

export interface IStoryActions  {
    handleChange?: (e: any) => void;
    updateStory?: any;
    deleteStory?:any;
    addStory?: any;
    setDetailsDisplayed?: any;
    detailsDisplayed?: string,
    storyData: IStory;
    mode?: string;
    setAddStoryModal?: any,
}
