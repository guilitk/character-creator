import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import styles from './components/CharacterEditor/CharacterEditor.module.css';

function App() {
  return (
    <>
    <div className={styles.perspectiveBackground}></div>
      <CharacterEditor />
      
      <Footer />
    </>
  );
}

export default App;
