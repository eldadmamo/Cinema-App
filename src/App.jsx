import './App.scss';
import PropTypes from 'prop-types';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter } from 'react-router-dom';
import Details from './components/content/details/Details';
import ErrorBoundary from './components/error/ErrorBoundary';
import { connect } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { appRoutes } from './redux/actions/routes';
import { AppRoutes } from './routes';

const App = (props) => {
  const { appRoutes } = props;

  const routesArray = useMemo(
    () => [
      {
        id: 1,
        path: '/',
        component: Home
      },
      {
        id: 2,
        path: '/:id/:name/details',
        component: Details
      }
    ],
    []
  );

  useEffect(() => {
    appRoutes(routesArray);
  }, [routesArray, appRoutes]);

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  );
};

App.propTypes = {
  appRoutes: PropTypes.func
};

export default connect(null, { appRoutes })(App);
