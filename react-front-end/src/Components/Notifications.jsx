import React, {useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Notifications({tasks}) {
//events could be tasks



  toast.configure({
    autoClose: 8000,
  
    //same as ToastContainer props//
    
  })

  
  //could pass plant name as prop..

  //useEffect if array of time === 0 tasks changes then rerun this notifactionst i notify about 
  const notify = (task) => toast.dark(`Time To ${task.name} `);
 

 

  useEffect(() => {
    tasks.forEach(notify)
  },[tasks])

  return (
    
    <div>
       <button onClick={notify}>Notify !</button>
        <ToastContainer />
    </div>
  )
}
