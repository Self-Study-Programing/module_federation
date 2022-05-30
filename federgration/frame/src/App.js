import React from "react";

const Header = React.lazy(() => import("header/Header"));

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
