import React from 'react';
import HomeSection from './components/sections/HomeSection';
import './index.css';
import Header from './components/common/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <main style={{ paddingTop: '80px' }}> */}
        <HomeSection />
      {/* </main> */}
    </div>
  );
}

export default App;
