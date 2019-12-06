import React from 'react';
import Tree from "./Tree";

function App() {
  return (
    <div className="App">
      <Tree url={`https://server.ecliptic.nl/api/fakedata/products`} expanded={true} />
    </div>
  );
}

export default App;
