// context/LoadingContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

const LoadingContext = createContext<{ isLoading: boolean; setLoading: (loading: boolean) => void } | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
