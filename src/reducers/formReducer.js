const initialState = {
    lat:"",
    lon:"",
    state :true
}
function formReducer (state = initialState , action) {

switch (action.type) {
    case "SET_FORM_DATA":{
    return {...state,...action.input}
        }
        default:
        return state
        }

}

export default formReducer;
