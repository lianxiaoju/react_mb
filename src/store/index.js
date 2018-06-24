import { combineReducers } from "redux"


let arr = (state =[] , action) => {
    switch (action.type) {
        case 'TEST_LOGIN':
            return 
        default:
            return { ...state }
    }
}


let reducer = combineReducers({
    arr
})



export default reducer