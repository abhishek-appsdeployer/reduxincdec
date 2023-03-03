import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Counter from './src/Counter';
import {store} from './redux/store';
import Animationcomp from './src/Animatiotioncomp';
import Login from './src/Login';
import Routes from './src/Routes';
const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* <Counter /> */}
        {/* <Animationcomp /> */}
        <Routes />
      </Provider>
    </>
  );
};

export default App;
