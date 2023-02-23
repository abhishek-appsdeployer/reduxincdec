import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Counter from './src/Counter';
import {store} from './redux/store';
const App = () => {
  return (
    <>
      <Provider store={store}>
      <Counter />
    </Provider>
    </>
  );
};

export default App;
