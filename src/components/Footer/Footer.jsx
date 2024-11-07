import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
      </div>
      <ul>
        <li>음성 설명</li>
        <li>고객 센터</li>
        <li>기프트 카드</li>
        <li>미디어 센터</li>
        <li>투자자 정보</li>
        <li>채용 정보</li>
        <li>이용약관</li>
        <li>개인정보 보호정책</li>
        <li>법적 고지</li>
        <li>쿠키 설정</li>
        <li>기업 정보</li>
        <li>문의하기</li>
      </ul>
      <p className='copyright-text'>2024 Movie Recommend Site. Inc.</p>
    </div>
  )
}

export default Footer
