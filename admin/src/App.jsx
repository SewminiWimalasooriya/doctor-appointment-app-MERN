import React from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContextProvider';
import { useContext } from 'react';


 const App = () =>{

  const { aToken} = useContext(AdminContext)


  return aToken ? (
    <div>
      <ToastContainer/>  {/*aToken when available not display login*/}
    </div>
  ):(
    <>
      <Login/>
      <ToastContainer/>
    </>
  )
}

export default App