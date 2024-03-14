import React, { useState, useEffect, useContext } from "react";
import getState from "./flux.js";

// Aquí creamos el contexto una sola vez fuera de la función injectContext
export const Context = React.createContext(null);

// También exportamos el hook useAppContext
export const useAppContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
<<<<<<< HEAD
};

const injectContext = PassedComponent => {
  const StoreWrapper = props => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updatedStore =>
          setState({
            ...state,
            store: Object.assign(state.store, updatedStore),
          }),
      })
    );

    useEffect(() => {
      state.actions.getMessage();
      state.actions.syncTokenFromSessionStore();
    }, []);

    const contextValue = {
      ...state,
      setUserSelections: selections =>
        setState({ ...state, userSelections: selections }),
    };

    return (
      <Context.Provider value={contextValue}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  return StoreWrapper;

};

export default injectContext;

=======
};

const injectContext = PassedComponent => {
  const StoreWrapper = props => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updatedStore =>
          setState({
            ...state,
            store: Object.assign(state.store, updatedStore),
          }),
      })
    );

    useEffect(() => {
      /*state.actions.getMessage();*/
    }, []);

    const contextValue = {
      ...state,
      setUserSelections: selections =>
        setState({ ...state, userSelections: selections }),
    };

    return (
      <Context.Provider value={contextValue}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  return StoreWrapper;

};

export default injectContext;
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
