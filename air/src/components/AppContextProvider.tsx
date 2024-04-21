import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PROVIDERS, PROVIDER_MODELS } from '../constants'

interface AppContextType {
  apiKey: string;             setApiKey: React.Dispatch<React.SetStateAction<string>>;
  provider: string;           setProvider: React.Dispatch<React.SetStateAction<string>>;
  model: string;              setModel: React.Dispatch<React.SetStateAction<string>>;
  models: string[];           setModels: React.Dispatch<React.SetStateAction<string[]>>;
  discardPercentage: number;  setDiscardPercentage: React.Dispatch<React.SetStateAction<number>>;
  query: string;              setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface FormProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [apiKey,            setApiKey] = useState<string>('');
  const [provider,          setProvider] = useState<string>(PROVIDERS[0]);
  const [model,             setModel] = useState<string>('');
  const [models,            setModels] = useState<string[]>(PROVIDER_MODELS[PROVIDERS[0]]);
  const [discardPercentage, setDiscardPercentage] = useState<number>(80);
  const [query,             setQuery] = useState<string>('');

  return (
    <AppContext.Provider value={{
      apiKey,             setApiKey,
      provider,           setProvider,
      model,              setModel,
      models,             setModels,
      discardPercentage,  setDiscardPercentage,
      query,              setQuery,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};
