import '../../content/main-content/MainContent.scss';
import Slideshow from '../slide-show/Slideshow';

const MainContent = () => {
  const images = [
    {
      url: 'https://cdn.britannica.com/35/201735-050-0B3066E6/Scene-The-Lord-of-the-Rings-Fellowship.jpg'
    },
    {
      url: 'https://hips.hearstapps.com/vidthumb/images/harrypottercast-1612558672.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*'
    },
    {
      url: 'https://4kwallpapers.com/images/wallpapers/captain-america-marvel-superheroes-3440x1440-663.jpg'
    }
  ];
  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Pagination</div>
      </div>
    </div>
  );
};

export default MainContent;
