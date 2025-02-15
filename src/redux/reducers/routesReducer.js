import { APP_ROUTES, PATH_URL } from '../types';

const initialState = {
  routeArray: [],
  path: '',
  url: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_ROUTES:
      return {
        ...state,
        routeArray: action.payload
      };
    case PATH_URL:
      return {
        ...state,
        path: action.payload.path,
        url: action.payload.url
      };
    default:
      return state;
  }
};
