import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ErrorPage.scss';
import { connect } from 'react-redux';
import { setError } from '../../redux/actions/error';

const ErrorPage = ({ clearState, setError }) => {
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    setError({ message: '', statusCode: null });
    if (clearState) clearState(); // Safely call clearState if provided
    navigate('/');
  };

  return (
    <div className="error-page">
      <h1 className="error-header">Oops!</h1>
      <p className="error-msg">Something went wrong.</p>
      <div className="error-link" onClick={navigateToHomePage}>
        <i className="icon-home"></i> Go back to home page.
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  clearState: PropTypes.func,
  setError: PropTypes.func.isRequired
};

export default connect(null, { setError })(ErrorPage);
