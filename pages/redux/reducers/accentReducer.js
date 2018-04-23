const initialState = {
    accentColor: ""
};

export default function(state = initialState, action){
   switch(action.type){
        case "CHANGE_ACCENT":
        return {
            ...state,
            accentColor:action.payload
        };

        default:
        return state;
    }
};