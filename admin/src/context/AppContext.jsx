import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    // value is the data you want to share via the context.
    const value = {

    }

    return (
        <AppContext.Provider value={value}>
            {props.children}      
                                    {/* props.children means any child components inside this provide will be able to access the context.props.children represents whatever components you wrap with AppContextProvider*/ }
        </AppContext.Provider>
    )
}

export default AppContextProvider   