import React, { useState } from "react";
import { createContext } from 'react';
import { useContext } from "react";
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterCustom from './components/ClickCounterCustom';
import HoverCounterCustom from './components/HoverCounterCustom';
import Display from './components/Display';
import DisplayProvider from './components/DisplayProvider';
import ParentRender from './components/ParentRender';
import ChildRender from './components/ChildRender';
import ErrorBoundary from './components/ErrorBoundary';
import StandaloneReducer from './components/StandaloneReducer';
import StyledComponent from './components/StyledComponent';
import Test from './components/test/Test';
import Test2 from './components/test2/Test2';







function App() {

  let [value, setValue] = useState(true);
  const handleClick = () => {
    setValue(!value);
  }
  return (
    <>
      <ErrorBoundary>
        <div>With higher order component</div>
        <ClickCounter />
        <HoverCounter />
        <div>With custom hook</div>
        <ClickCounterCustom />
        <HoverCounterCustom />
        <div>With Context and useReducer</div>
        <DisplayProvider>
          <Display />
        </DisplayProvider>
        <ParentRender render={({ fromParent }) => <ChildRender fromParent={fromParent} />}>
        </ParentRender>
        <StandaloneReducer />
        <StyledComponent value={value} onClick={handleClick} $style={{ backgroundColor: '#007bff' }}>{value ? 'Styled button' : 'Re-Styled button'}</StyledComponent>
        <Test />
        <Test2 />
      </ErrorBoundary>

    </>
  );
}




export default App;
