const initialState = {
    notes: []
};

export default function(state = initialState, action){
   switch(action.type){
        case "ADD_NOTES":
        const stateObj = {
            ...state
        };
        action.payload.forEach(item => {
            stateObj.notes.push(item);
        });   
        return stateObj;
        
        case "DELETE_NOTE":
        const obj = {
            ...state
        };
        obj.notes = obj.notes.filter(item=>item.id !== action.payload);
        return obj;

        default:
        return state;
    }
};