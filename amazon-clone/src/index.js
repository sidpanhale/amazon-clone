import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

//key :pk_test_51IBZhWL6HHMObikiNys1oPxkjqfDAM4BrCC6G3UFGpF5tfSLYPgifVg3qi94yetk4MJoJCSLwoTEEj7YUGvAtRrE00gFpu9235
// key : sk_test_51IBZhWL6HHMObikijdsC9LMqABPUWqLDcrPExHyEv35wF81C3AFjclmjmPKnVBDEAMCUi4k3zzhmRP6zg6Gz6ZHD00Dxa6BFEr

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
