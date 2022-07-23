import React from 'react'
import '../meg project/megcss/slide.scss'
import Theslide from './megdata/slidedata';
import { FaShoppingCart } from "react-icons/fa";
import List from './list';
import Trending from './Trending';
import Middlebus from './middlebus';
import Topselling from './Top';
import Midlogo from './midlogo';
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

const Slideshow = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Theslide.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <main> 
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
            {Theslide.map((item) => {
                return(
                    <div className="slide">
                      <div className='slide-text'>
                        <h1 className="item name">{item.name}</h1>
                        
                        <h2 className="item other">{item.other}</h2>
                        <h6 className="item letter">{item.subtext}</h6>
                        <h1 className="item other1">{item.other1}</h1>
                        <h2 className="item subtext2">{item.subtext2}</h2>
                        
                        <h6 className="item letter">{item.letter}</h6>
                        <h6 className="item letter">{item.letter2}</h6>
                        <h6 className="item letter">{item.letter3}</h6>
                        <button>Shop Now <FaShoppingCart/></button>
                       
                      </div>  
                        <img className="img url1" src={item.img_url1} alt=""/>
                        <img className="img url2" src={item.img_url2} alt=""/>
                        <img className="img url" src={item.img_url} alt=""/>
                        
                    </div>
                )
            })}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
     
    </div>
      <List />
      <Trending />
      <Middlebus />
      <Topselling />
      <Midlogo />
      <Trending />
    </main>
  );
}
export default Slideshow