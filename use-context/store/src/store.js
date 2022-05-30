import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    clear: (state) => {
      state.count = 0;
    },
  },
});

const { increment, clear } = counterSlice.actions;

export default counterSlice.reducer;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export function useStore() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return {
    count,
    increment: () => dispatch(increment()),
    clear: () => dispatch(clear()),
  };
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
