import React from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContextProvider';
import { useContext } from 'react';
import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';
import { Routes } from 'react-router-dom';
import AllAppointments from './pages/Admin/AllAppointments';
import { Route } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import DoctorsList from './pages/Admin/DoctorsList';
import AddDoctor from './pages/Admin/AddDoctor';


 const App = () =>{

  const { aToken} = useContext(AdminContext)


  return aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>  {/*aToken when available not display login*/}
      <Navbar/>
      <div className='flex items-start'>
        <Slidebar/>
        <Routes>
          <Route path='/' element={<></>}/>  {/*default route*/}
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointments' element={<AllAppointments/>}/>
          <Route path='/doctors-list' element={<DoctorsList/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
          
        </Routes>
      </div>
    </div>
  ):(
    <>
      <Login/>
      <ToastContainer/>
    </>
  )
}

export default App