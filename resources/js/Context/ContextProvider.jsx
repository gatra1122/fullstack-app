import {createContext, useContext, useState} from "react";

const StateContext = createContext({
  tes: 'INI DARI DALAM CONTEXT PROVIDER',
  setTes: () => {},
})

export const ContextProvider = ({children}) => {
  const [tes, setTes] = useState({});

  return (
    <StateContext.Provider value={{
        tes,
        setTes,
    }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);