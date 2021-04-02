import React from 'react';
import Header from './components/Header';
import routes from './config/routes';

function App() {
  return (
    <div>
      <Header />
      { routes }
    </div>
  );
};

export default App;
