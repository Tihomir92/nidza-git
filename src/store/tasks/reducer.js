import constants from './actionTypes'

const initialState = {
   tasks: [],
   errorMessage: ''
}

const taskReducer = (state = initialState, action) => {
     const {type, payload} = action;
     switch(type) {
         case constants.GET_TASKS_SUCCESS:
             return {
                 ...state,
                 tasks: payload
             }
         case constants.GET_TASKS_FAIL:
             return {
                 ...state,
                 errorMessage: payload
             }
         default:
             return state
     }
}

export default taskReducer