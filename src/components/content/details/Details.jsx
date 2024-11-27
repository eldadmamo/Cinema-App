import Rating from '../rating/Rating';
import '../details/Details.scss';
import Tabs from './tabs/Tabs';
import Crew from './crew/Crew';
import Media from './media/Media';
import Reviews from './reviews/Reviews';
import Overviewing from './overviewing/Overviewing';

const Details = () => {
  return (
    <>
      <div className="movie-container">
        <div
          className="movie-bg"
          style={{
            backgroundImage:
              'url(https://images.bauerhosting.com/legacy/empire-tmdb/films/27205/images/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80)'
          }}
        ></div>
        <div className="movie-overlay"></div>
        <div className="movie-details">
          <div className="movie-image">
            <img
              src="https://images.bauerhosting.com/legacy/empire-tmdb/films/27205/images/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
              alt=""
            />
          </div>
          <div className="movie-body">
            <div className="movie-overview">
              <div className="title">
                Avengers <span>2020-12-03</span>
              </div>
              <div className="movie-genres">
                <ul className="genres">
                  <li>Action</li>
                  <li>Comedy</li>
                  <li>Sci-fi</li>
                </ul>
              </div>
              <div className="rating">
                <Rating className="rating-stars" rating={6.5} totalStars={10} />
                &nbsp;
                <span>6.5</span> <p>(200) reviews</p>
              </div>
              <Tabs>
                <div label="Overview">
                  <Overviewing />
                </div>
                <div label="Crew">
                  <Crew />
                </div>
                <div label="Media">
                  <Media />
                </div>
                <div label="Reviews">
                  <Reviews />
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
