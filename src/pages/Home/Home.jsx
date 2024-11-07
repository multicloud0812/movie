import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  const handlePlayClick = () => {
    window.location.href = 'https://www.youtube.com/watch?v=iJsWRpSetq0';
  };

  const handleMoreInfoClick = () => {
    window.location.href = 'https://namu.wiki/w/%EC%98%A4%EC%A7%95%EC%96%B4%20%EA%B2%8C%EC%9E%84(%EC%8B%9C%EC%A6%8C%202)';
  };

  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p> 오징어 게임2 더욱 강렬한 도전, <br></br>예상치 못한 반전, 숨 막히는 서스펜스를 가득 안고 돌아옵니다.
          <br></br>모든 선택이 중요하고 위기가 그 어느 때보다도 높은 상황을 체험해보세요. <br></br>모두가 이야기하게 될 모험을 놓치지 마세요!</p>
          
          <div className="hero-btns">
            <button className='btn' onClick={handlePlayClick}>
              <img src={play_icon} alt="Play" />Play</button>
            <button className='btn dark-btn' onClick={handleMoreInfoClick}>
              <img src={info_icon} alt="Info" />More Info </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on MovieReco"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
