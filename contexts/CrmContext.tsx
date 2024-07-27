// contexts/CrmContext.tsx

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CrmContextType {
  customers: any[];
  deals: any[];
  addCustomer: (customer: any) => void;
  addDeal: (deal: any) => void;
  // Add more state and functions as needed
}

const CrmContext = createContext<CrmContextType | undefined>(undefined);

export const CrmProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customers, setCustomers] = useState<any[]>([]);
  const [deals, setDeals] = useState<any[]>([]);

  const addCustomer = (customer: any) => {
    setCustomers((prev) => [...prev, customer]);
  };

  const addDeal = (deal: any) => {
    setDeals((prev) => [...prev, deal]);
  };

  return (
    <CrmContext.Provider value={{ customers, deals, addCustomer, addDeal }}>
      {children}
    </CrmContext.Provider>
  );
};

export const useCrm = () => {
  const context = useContext(CrmContext);
  if (context === undefined) {
    throw new Error('useCrm must be used within a CrmProvider');
  }
  return context;
};