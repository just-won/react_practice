import React, {useState, useEffect, useRef} from "react";

class ErrorBoundary extends React.Component {
  state = { error : null };
  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <p>There is some error...</p>
    }

    return this.props.fallback;
  }
}

const Child =()=> {
  throw new Error("Something wrong...");
  return <p>Child...</p>
};

const Fallback =()=> {
  return <p>There is some ERROR</p>;
}

const App =()=> {

  return (
    <>
      <p>App</p>
      <ErrorBoundary fallback={<Fallback/>}>
        <Child />
      </ErrorBoundary>
    </>
  );
}

export default App;
