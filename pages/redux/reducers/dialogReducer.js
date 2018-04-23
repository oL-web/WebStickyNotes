const initialState = {
    showSettings: false,
    showShare: false
};

export default function(state = initialState, action){
   switch(action.type){
        case "TOGGLE_SETTINGS":
        return {
            ...state,
            showSettings:!state.showSettings
        };
        case "TOGGLE_SHARE":
        return {
            ...state,
            showShare:!state.showShare
        };
        default:
        return state;
    }
};