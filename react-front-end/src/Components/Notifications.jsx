import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Notifications() {

  toast.configure({
    autoClose: 200,
    draggable: false,
    //same as ToastContainer props
  })

  const notify = () => toast.success("Time to Water!");
  return (
    

    <div>
       <button onClick={notify}>Notify !</button>
        <ToastContainer />
    </div>
  )
}
