import React, { createContext, useState, useEffect } from "react";
import { fetchTsunamiInfo } from "../api/tsunami";

export const TsunamiContext = createContext();

export const TsunamiProvider = ({ children }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const data = await fetchTsunamiInfo();
      setInfo(data);
    };

    getInfo();
  }, []);

  return (
    <TsunamiContext.Provider value={{ info }}>
      {children}
    </TsunamiContext.Provider>
  );
};
