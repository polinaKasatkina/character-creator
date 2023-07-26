import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

const StackingBg = {
  backgroundColor: 'hsl(195deg, 20%, 86%)',
  width: '100%',
  height: '40%',
  position: 'fixed',
  bottom: 0
};

function App() {
  return (
    <>
      <div style={StackingBg}></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
