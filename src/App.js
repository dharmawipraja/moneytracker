import React from 'react';
import './App.css';
import { GlobalProvider } from './Context/GlobalState';
import Root from './Screens/RootScreen';

function App() {
  return (
    <GlobalProvider>
      <Root />
    </GlobalProvider>
  );
}

export default App;
