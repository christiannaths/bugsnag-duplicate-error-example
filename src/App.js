import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

function SubComponent() {
  const foo = {}.bar.baz;

  return <div>foo</div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ErrorBoundary>
          <SubComponent />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
