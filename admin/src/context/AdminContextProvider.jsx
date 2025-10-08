import { createContext } from "react";

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    // value is the data you want to share via the context.
    const value = {

    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}      
        </AdminContext.Provider>
    )
}

export default AdminContextProvider   