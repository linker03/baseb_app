import React from 'react';
import { RootRouter } from './routes/RootRouter';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RootRouter />
      </Provider>
    </div>
  );
}

export default App;
