import { createContext } from "react";

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {

    // value is the data you want to share via the context.
    const value = {

    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}      
                                    
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider   