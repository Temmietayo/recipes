import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthIsLoaded from './client/components/common/AuthIsLoaded';
import Navbar from './client/components/common/Navigation/Navbar';
import Routes from './client/components/Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthIsLoaded>
          <div>
            <Navbar />
            <Routes />
          </div>
        </AuthIsLoaded>
      </Router>
    </div>
  );
}

export default App;
