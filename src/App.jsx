import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';

const App = () => {
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
