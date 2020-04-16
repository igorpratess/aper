import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Routes from "./assets/routes/routes";
import store from './assets/store';

const App = () => <Provider store={store}>
    <Routes />
</Provider>;

export default App;