import Rating from '../content/rating/Rating';
import '../grid/Grids.scss';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { IMAGE_URL } from '../../services/movies.service';
import LazyImage from '../lazy-image/LazyImage';
import { Link } from 'react-router-dom';

const Grids = (props) => {
  const { list } = props;
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    setMovieData(list);
  }, [list]);

  const formatMovieTitle = (title) => {
    const titleStr = title.toLowerCase();
    return titleStr.replace(/ /g, '-');
  };

  return (
    <>
      <div className="grid">
        {movieData.map((data) => (
          <div key={uuidv4()}>
            <LazyImage
              className="grid-cell"
              src={`${IMAGE_URL}${data.poster_path}`}
              alt="placeholder"
            >
              <div className="grid-read-more">
                <button className="grid-cell-button">
                  <Link to={`/${data.id}/${formatMovieTitle(data.title)}/details`}>Read More</Link>
                </button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">{data.title}</span>
                <div className="grid-detail-rating">
                  <Rating rating={data.vote_average} totalStars={10} />
                  &nbsp;&nbsp;
                  <div className="grid-vote-average">{data.vote_average}</div>
                </div>
              </div>
            </LazyImage>
          </div>
        ))}
      </div>
    </>
  );
};

Grids.propTypes = {
  list: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  list: state.movies.list
});

export default connect(mapStateToProps, {})(Grids);
