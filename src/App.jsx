import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/store';
import Header from './components/header/Header';
import Main from './components/main/main.jsx';


const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div>
          <Main />
        </div>
      </Provider>
    </>
  );
};

export default App;
