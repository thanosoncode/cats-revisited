import React, { useReducer } from "react";

type AppState = {
  globalVar: string;
};

const defaultState: AppState = {
  globalVar: "react ftw",
};

type Action = { type: "CHANGE_GLOBAL_VAR"; updatedVar: string };

const appReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "CHANGE_GLOBAL_VAR":
      return { ...state, globalVar: action.updatedVar };

    default:
      return state;
  }
};

type Dispatch = (action: Action) => void;
type AppProviderProps = { children: React.ReactNode };

const AppStateContext = React.createContext<AppState | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, defaultState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
};

const useAppDispatch = () => {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
};

export { AppProvider, useAppState, useAppDispatch };
