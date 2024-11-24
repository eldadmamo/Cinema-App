import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/store';
import Header from './components/header/Header';
import Home from './components/home/Home';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div>
          <Home />
        </div>
      </Provider>
    </>
  );
};

export default App;
