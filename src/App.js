
// import './App.scss';
import '../src/component/meg project/megcss/Meg.scss'


 import {Routes, Route} from'react-router-dom'
 import Header from './component/meg project/Megnav';
 import Footer from './component/meg project/MegFoot';
import Trending from './component/meg project/Trending';
import TrendingPage from './component/meg project/megSinglePage/Trendingpage';
import Topselling from './component/meg project/Top';
import TopSingle from './component/meg project/megSinglePage/Topsingle';
import Heade from './component/youtube/Heade';
import Basket from './component/youtube/Basket';
import Main from './component/youtube/Main';
import Slideshow from './component/meg project/Slide';
import List from './component/meg project/list';
import Middlebus from './component/meg project/middlebus';
import Midlogo from './component/meg project/midlogo';
import Computers from './component/meg project/computer';



function App() {
  return (
    <div className="App">
      
    <Header />
    
      <div className='row'>
        <Routes>
          <Route path="/" element={<Slideshow />} />
          {/* <Route path="/" element={<Topselling/>} /> */}
          <Route path="/Trending/:trendsId" element={<TrendingPage/>} /> 
          <Route path="/Topselling/:topId" element={<TopSingle/>} />
          <Route path="/Computers" element={<Computers />}/>
        </Routes>
            <Footer/>
           
        </div> 
                            {/* <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/Blog/:blogId" element={<BlogPage />} />
            <Route path="BlogUpdate" element={<BlogUpdate />} />
            </Routes> */}
    </div>
  );
}

export default App;
