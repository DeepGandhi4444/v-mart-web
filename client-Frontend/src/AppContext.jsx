// AppContext.js
import React, { createContext, useState, useContext, useEffect} from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [globalapi, setGlobalapi] = useState("");
  const [basketcount, setBasketcount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products...");
      const jsonData = await response.json();
      setGlobalapi(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <AppContext.Provider value={{globalapi, setGlobalapi,basketcount, setBasketcount }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalData = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('usedata must be used within an AppProvider');
  }
  return context;
};
