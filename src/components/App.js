import React from 'react';

import ClassContainerB from './container/ClassContainerB';
import ClassContainerC from './container/ClassContainerC';
import ClassContainerD from './container/ClassContainerD';

import TopBar from './class/ClassComponentE';
import ProductList from './class/ClassComponentF';

function App() {
  return (
    <div className="if__base-wrapper pad-tb-20 direction--column">
      <div className="flex__mid-container max-w-768 direction--column">
        
          <ClassContainerB />
          <ClassContainerC />
          <ClassContainerD />

          <TopBar className="top-bar" />
          <div className="container">
            <ProductList />
          </div>

      </div>
    </div>
  );
}

export default App;
