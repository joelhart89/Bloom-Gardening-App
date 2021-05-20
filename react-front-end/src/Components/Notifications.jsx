import React, {useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Notifications({tasks}) {
//events could be tasks

  toast.configure({
    autoClose: 10000,
    
  })

  const notify = (task) => toast.dark(`Time To ${task.name} `);

  useEffect(() => {
    tasks.forEach(notify)
  },[tasks])

  return (
    
    <div>
        <ToastContainer />
    </div>
  )
}
