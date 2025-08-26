import { createContext } from "react";
import { doctors } from "../assets/assets";     

export const AppContext = createContext()

const AppContextProvider = (props)  => {

    const currencySymbol = "$"  // Define currencySymbol here , so it can change from here to all pages


    const value = {
        doctors,currencySymbol,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;