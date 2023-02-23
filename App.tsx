import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Counter from './src/Counter';
import {store} from './redux/store';
import Animationcomp from './src/Animatiotioncomp';
const App = () => {
  return (
    <>
      <Provider store={store}>
      {/* <Counter /> */}
      <Animationcomp />
    </Provider>
    </>
  );
};

export default App;
