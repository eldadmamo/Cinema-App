import { useRoutes } from 'react-router-dom';
import Details from './components/content/details/Details';
import Home from './components/home/Home';
import ErrorPage from './components/error/ErrorPage';

export const AppRoutes = (props) => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home {...props} />
    },
    {
      path: '/:id/:name/details',
      element: <Details {...props} />
    },
    {
      path: '*',
      element: <ErrorPage {...props} />
    }
  ]);

  return elements;
};
