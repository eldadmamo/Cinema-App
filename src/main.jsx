import { createRoot } from 'react-dom/client';
import './index.scss';
import { StrictMode } from 'react';
import App from './App';
import * as Sentry from '@sentry/browser';
import { Provider } from 'react-redux';
import store from './redux/store';

if (import.meta.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: import.meta.env.VITE_REACT_APP_SENTRY_DSN,
    beforeBreadcrumb(breadcrumb) {
      return breadcrumb.category === 'ui.click' ? null : breadcrumb;
    }
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
