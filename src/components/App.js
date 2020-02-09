import React from 'react';
import ClassContainerB from './class-container/ClassContainerB';
import ClassContainerC from './class-container/ClassContainerC';


function App() {
  return (
    <div className="if__base-wrapper pad-tb-20 direction--column">
      <div className="flex__mid-container max-w-768 direction--column">
        
          <ClassContainerB />
          <ClassContainerC />

      </div>
    </div>
  );
}

export default App;