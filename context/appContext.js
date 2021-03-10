// src/context/state.js
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
