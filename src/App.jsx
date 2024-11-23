import { useState } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './redux/store';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <Provider store={store}>
    <div>
        <h1>Simple React Redux</h1>
    </div>
    </Provider>
    </>
  );
};

export default App;
