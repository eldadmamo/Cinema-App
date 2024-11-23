import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/store';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div>
          <h1>Simple React Redux</h1>
        </div>
      </Provider>
    </>
  );
};

export default App;
