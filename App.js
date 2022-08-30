import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import {Provider} from 'react-redux';
import Layout from './src/components/Layout';
import userReducer from './src/helpers/user';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}
