import axios from 'axios'

const baseUrl = 'http://localhost:4000'

export const callGetTasks = (payload) => {
     axios.get(baseUrl+'/'+ payload)
}

export const callCreateTask = (payload) => {
     axios.post(baseUrl+'/create', payload)
}