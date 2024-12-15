import React, {  createContext, useState } from 'react'
// import { children } from 'react';

export const darkTheme = createContext();

export default function DarkMode({children}) {
const [dark, setDark] = useState(false);

const toggleMode = () => {
    setDark(!dark);
}

  return (
  <darkTheme.Provider value={{dark, toggleMode}}>
   {children}
  </darkTheme.Provider>
  )
}
