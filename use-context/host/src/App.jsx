import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "nav/Header";
import { StoreProvider, useStore } from "store/store";

const App = () => {
  const { count, increment } = useStore(0);
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div>Name: host</div>
      <div>Count: {count}</div>
      <div>
        <button
          onClick={increment}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
