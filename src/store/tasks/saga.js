import constants from './actionTypes'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { createTaskSuccess, createTaskFail, getTasksSuccess, getTasksFail } from './action'
import { callGetTasks, callCreateTask } from '../../apiServices'

function* createTaskSaga(action) {
    try {
       const response = yield call(callCreateTask, action.payload) //msm da je ovde problem ok
       yield put(createTaskSuccess(response.data))
    }catch(err) {
       yield put(createTaskFail(err.message))
    }
}

function* getTasksSaga(action) {
    try {
       const response = yield call(callGetTasks, action.payload) // oces da ostanes na vezi? ae
       yield put(getTasksSuccess(response.data))
    }catch(err) {
       yield put(getTasksFail(err.message))
    }
}



function* taskSagas() {
    yield takeEvery(constants.GET_TASKS, getTasksSaga)
    yield takeLatest(constants.CREATE_TASK, createTaskSaga)
}


export default taskSagas