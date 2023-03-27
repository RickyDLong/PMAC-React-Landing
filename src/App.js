import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Committee from './components/Committee';
import Apply from './components/Apply';
import Player from './components/Player';


function App() {
  return (
    <div>
      <Navbar />  
      <Hero />
      <Committee />
      <Apply />
      <Player />
    </div>
  );
}

export default App;
