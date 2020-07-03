import constants from './actionTypes'

// get tasks
export const getTasks = (payload) => {
    return {
        type: constants.GET_TASKS,
        payload
    }
}
export const getTasksSuccess = (payload) => {
    return {
        type: constants.GET_TASKS_SUCCESS,
        payload
    }
}
export const getTasksFail = (payload) => {
    return {
        type: constants.GET_TASKS_FAIL,
        payload
    }
}

// create task
export const createTask = (payload) => {
    return {
        type: constants.CREATE_TASK,
        payload
    }
}
export const createTaskSuccess = (payload) => {
    return {
        type: constants.CREATE_TASK_SUCCESS,
        payload
    }
}
export const createTaskFail = (payload) => {
    return {
        type: constants.CREATE_TASK_FAIL,
        payload
    }
}
