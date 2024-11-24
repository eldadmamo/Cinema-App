import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/store';
import Header from './components/header/Header';
import MainContent from './components/content/main-content/MainContent';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div>
          <MainContent />
        </div>
      </Provider>
    </>
  );
};

export default App;
