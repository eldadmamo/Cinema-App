import '../rating/Rating.scss'
import PropTypes from 'prop-types';

import { Fragment, useEffect, useRef, useState} from 'react';
const Rating = (props) => {
    const {rating, totalStars, className } = props;
    const [numberOfStars, setNumberOfStars] = useState();
    const ratingRef = useRef();

    [1,2,3,4,5];

    useEffect(() => {
        setNumberOfStars([...Array(totalStars).keys()].map((i) => i + 1));
        let percentage;
        if (rating <= 5){
            percentage = (rating / 5) * 100;
        } else {
            percentage = (rating / 10) * 100;
        }
        const startPercentage = `${Math.floor(percentage)}%`;
        ratingRef.current.style.width = startPercentage;
    },[rating,totalStars])

  return (
    <div className="star-rating">
      <div className={`back-stars ${className}`}>
        {
            numberOfStars && numberOfStars.map((i) => (
                <Fragment key={i}>
                    <i className="fas fa-star" aria-hidden="true"></i>
                </Fragment>
            )) 
        }
        <div className="front-stars" ref={ratingRef}>
        {
            numberOfStars && numberOfStars.map((i) => (
                <Fragment key={i}>
                    <i className="fas fa-star" aria-hidden="true"></i>
                </Fragment>
            ))
        }
        </div>
      </div>
    </div>
  )
}

Rating.PropTypes = {
    rating: PropTypes.number.isRequired,
    totalStars: PropTypes.number.isRequired,
    className: PropTypes.string
}

export default Rating
