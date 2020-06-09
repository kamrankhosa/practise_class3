import React from 'react';
import './App.css';
import Languages from './P_languages';

function App() {
  return (
    <div className="App">
     <div>
        <Languages lang1="C/C++" lang2="Java" lang3="C#" lang4="JavaScript" lang5="Php" lang6="Rust" lang7="Python" />
     </div>
    </div>
  );
}

export default App;
