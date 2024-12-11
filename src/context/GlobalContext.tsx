import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext<any>(null);                             


export const GlobalContextProvider = ({ children }: any) => {
    
    const [cartData, setCartData] = useState<any>([]);
    
    return (
        <GlobalContext.Provider value={{cartData,setCartData}}>
            {children} 
        </GlobalContext.Provider> 
    )
}

export const useGlobalState = () => useContext(GlobalContext);  