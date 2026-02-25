import React, { createContext, useContext, useState, useCallback } from "react";

interface LocationContextType {
  address: string;
  setAddress: (address: string) => void;
  isLocationSet: boolean;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [address, setAddressState] = useState("");

  const setAddress = useCallback((addr: string) => {
    setAddressState(addr.slice(0, 200));
  }, []);

  return (
    <LocationContext.Provider value={{ address, setAddress, isLocationSet: address.trim().length > 0 }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("useLocation must be used within LocationProvider");
  return ctx;
};
