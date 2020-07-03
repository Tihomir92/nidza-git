import React, { Fragment, useState, useEffect } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Main from '../components/main/Main'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation } from "react-router-dom";
import { createTask } from '../store/tasks/action'
import { getTasks } from '../store/tasks/action'
import moment from 'moment'

const MainContainer = () => {

   let { date } = useParams();
   let location = useLocation();
   const dispatch = useDispatch();
   const listOfTasks = useSelector(state => state.taskReducer.tasks);
   const currentDate = moment().format('MM-DD-YYYY');

   useEffect(() => {
      sessionStorage.setItem('params', date);
      if(date) dispatch(getTasks(date));
      if(location.pathname == '/') dispatch(getTasks(currentDate))
   }, [])

   const [state, setState] = useState({
      title: '',
      hours: '',
   })

   const takeValues = (e) => {
      setState({
         ...state,
         [e.target.name]: e.target.value
      })
   }
   const newTask = () => {
      const task = {
         title: state.title,
         hours: state.hours,
         date: sessionStorage.getItem('params')
      }
      dispatch(createTask(task))
      setState({
         ...state,
         title: '',
         hours: '',
      })
   }

   return (
      <Fragment>
         <Header
            takeValues={takeValues}
            state={state}
            newTask={newTask}
         />
         <Main
            listOfTasks={listOfTasks}
         />
         <Footer />
      </Fragment>
   )
}

export default MainContainer