import { createContext } from "react";
// import { doctors } from "../assets/assets"; ----not needed now as we will fetch from backend-----
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";


export const AppContext = createContext()

const AppContextProvider = (props)  => {

    const currencySymbol = "$"  // Define currencySymbol here , so it can change from here to all pages
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [doctors,setDoctors] = useState([])

    const value = {
        doctors,currencySymbol,
    }

    //call this function to get all doctors from backend
    const getDoctorsData = async () => {
        try {
            const {data} = await axios.get(backendUrl+'/api/doctor/list')
            if(data.success){
                setDoctors(data.doctors)
                console.log("doctors data:",data.doctors)
                
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }
    }

    useEffect(()=>{
        getDoctorsData()
    },[])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;