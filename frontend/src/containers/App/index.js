import React from "react";
import Routes from "./router";
import { Provider } from "react-redux";
import store from "../../redux/store";
import './style.scss';

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}
