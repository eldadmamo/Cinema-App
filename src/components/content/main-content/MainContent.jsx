import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import '../../content/main-content/MainContent.scss';
import Paginate from '../paginate/Paginate';
import Slideshow from '../slide-show/Slideshow';
import Grids from '../../grid/Grids';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../../services/movies.service';

const MainContent = (props) => {
  const {list} = props
  const imagesArray = [
    {
      url: 'https://cdn.britannica.com/35/201735-050-0B3066E6/Scene-The-Lord-of-the-Rings-Fellowship.jpg',
      rating: 7.5
    },
    {
      url: 'https://hips.hearstapps.com/vidthumb/images/harrypottercast-1612558672.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
      rating: 8.5
    },
    {
      url: 'https://4kwallpapers.com/images/wallpapers/captain-america-marvel-superheroes-3440x1440-663.jpg',
      rating: 7.8
    },
    {
      url: 'https://cdn.britannica.com/35/201735-050-0B3066E6/Scene-The-Lord-of-the-Rings-Fellowship.jpg',
      rating: 9.7
    },
    {
      url: 'https://hips.hearstapps.com/vidthumb/images/harrypottercast-1612558672.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
      rating: 6.5
    },
    {
      url: 'https://4kwallpapers.com/images/wallpapers/captain-america-marvel-superheroes-3440x1440-663.jpg',
      rating: 8.5
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([])
  const randomMovies = list.sort(() => Math.random() - Math.random()).slice(0,4);

  useEffect(() => {
    console.log(list);
    if (randomMovies.length){
      const IMAGES = [
        {
          id: 1,
          url: `${IMAGE_URL}/${randomMovies[0].backdrop_path}`
        },
        {
          id: 2,
          url: `${IMAGE_URL}/${randomMovies[1].backdrop_path}`
        },
        {
          id: 3,
          url: `${IMAGE_URL}/${randomMovies[2].backdrop_path}`
        },
        {
          id: 4,
          url: `${IMAGE_URL}/${randomMovies[3].backdrop_path}`
        }
      ]
      setImages(IMAGES);
    }
  },[])
  const paginate = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      <Grids images={imagesArray} />
    </div>
  );
};

MainContent.propTypes = {
  list: PropTypes.array.isRequired
}


const mapStateToProps = (state) => ({
list: state.movies.list
})

export default connect(
  mapStateToProps,
  {}
)(MainContent);
