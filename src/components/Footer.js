import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className="footer-inner">
        <div className='footer-nav'>
          <ul>
            <li><a href="#none">회사소개</a></li>
            <li><a href="#none">제휴/제안</a></li>
            <li><a href="#none">고객센터</a></li>
            <li><a href="#none">개인정보처리방침</a></li>
            <li><a href="#none">이메일무단수신거부</a></li>
            <li><a href="#none">윤리규범실천치침</a></li>
          </ul>
        </div>
        <div className="footer-desc-img">
          <div className="footer-desc">
            <ul>
              <li>고객센터 02-779-7758 / 가맹문의 02-3276-9581</li>
              <li>운영시간 : 월요일~ 목요일(09:00~18:00), 금요일 (09:00~13:00)</li>
              <li>점심시간 : 12:00~13:00 / 주말 및 공휴일 휴무</li>
              <li>서울 종로구 종로33길 15, 8층 | (주)공차코리아 대표이사 고희경  |  사업자등록번호 214-88-84534  |  통신판매번호 2020-서울종로-0966</li>
              <li>©GONGCAHA KOREA CO. LTD. ALL RIGHTS RESERVED</li>
            </ul>
          </div>
          <div className="footer-img">
            <img src="/images/swiper-logo.png" alt="" />
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
