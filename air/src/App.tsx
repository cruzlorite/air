import React from 'react';

import './App.css'
import Title from './components/Title';
import Table from './components/Table';
import { AppContextProvider } from './components/AppContextProvider';

function App() {
  return (
    <AppContextProvider>
      <div>
        <Title/>
        <Table/>
      </div>
    </AppContextProvider>
  );
}

export default App;