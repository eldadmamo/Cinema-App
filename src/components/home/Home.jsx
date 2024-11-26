import { useEffect, useState } from 'react';
import MainContent from '../content/main-content/MainContent';
import Spinner from '../spinner/Spinner';

const Home = () => {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },3000);
  },[])
  return (
    <div className="main">
     {
      loading ? <Spinner/> :  <MainContent />
     }
    </div>
  );
};

export default Home;
