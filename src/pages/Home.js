import React, { useState } from 'react';
import { Container, Carousel, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const bestSellers = [
  { title: 'Taro Jewelry Signature Milk Tea ', kotitle: '타로 쥬얼리 시그니처 밀크티', img: '/images/new-menu01.png' },
  { title: 'Royal Milk Tea Red Bean Bingsu Shake', kotitle: '로얄 밀크티 팥 빙수 쉐이크', img: '/images/new-menu02.png' },
  { title: 'Chocolate Mint Cookie Smoothie', kotitle: '초코바른 민트 쿠키 스무디', img: '/images/new-menu03.png' },
  { title: 'Melon Melon Milk Tea', kotitle: '멜론 멜론 밀크티', img: '/images/new-menu04.png' },
  { title: 'Green Tangerine Yogurt Crush + Pink Pearls', kotitle: '청귤 요거티 크러쉬 + 핑크펄', img: '/images/new-menu05.png' },
  { title: 'Greek Yogurt & Mango Milk Tea Crush', kotitle: '그릭 요거트 & 망고 밀크티 크러쉬', img: '/images/new-menu06.png' },
];

const newArrivals = [
  { title: 'Black Milk Tea + Pearl', kotitle: '블랙 밀크티 + 펄', img: '/images/best-menu01.png' },
  { title: 'Taro Milk Tea + Pearl', kotitle: '타로 밀크티 + 펄', img: '/images/best-menu02.png' },
  { title: 'Americano', kotitle: '아메리카노', img: '/images/best-menu03.png' },
  { title: 'Jeju Green Milk Tea + Pearl', kotitle: '제주 그린 밀크티 + 펄', img: '/images/best-menu04.png' },
  { title: 'Chocolate Milk Tea + Cheese Foam', kotitle: '초콜릿 밀크티 + 치즈폼', img: '/images/best-menu05.png' },
  { title: 'Strawberry Cookie Smoothie + Pearl', kotitle: '딸기 쿠키 스무디 + 펄', img: '/images/best-menu06.png' },
];

const Home = () => {
  const [selected, setSelected] = useState('best');
  const products = selected === 'best' ? bestSellers : newArrivals;

  return (
    <div className="homepage">
      {/* main */}
      <Carousel>
        <Carousel.Item>
          <iframe
            src="https://www.youtube.com/embed/XrRFTqI7f-Y?autoplay=1&mute=1&controls=0&loop=1&playlist=XrRFTqI7f-Y&rel=0&showinfo=0"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen; muted"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            src="https://www.youtube.com/embed/L3A6B5pj0Is?autoplay=1&mute=1&controls=0&loop=1&playlist=L3A6B5pj0Is&rel=0&showinfo=0"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen; muted"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            src="https://www.youtube.com/embed/OhCHyTVYO24?autoplay=1&mute=1&controls=0&loop=1&playlist=OhCHyTVYO24&rel=0&showinfo=0"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen; muted"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </Carousel.Item>
      </Carousel>
      <i className="bi bi-mouse"></i>
      {/* section - menu */}
      <section className='menu'>
        <Container className="py-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className='munu-title'>NEW&BEST MENU</h2>
            <Nav variant="pills" defaultActiveKey="best" onSelect={(key) => setSelected(key)}>
              <Nav.Item>
                <Nav.Link eventKey="best">NEW MENU</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="new">BEST MENU</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Row className="mb-4 menu-box">
            {products.slice(0, 3).map((item, idx) => (
              <Col key={idx} md={4} className="mb-4 cards">
                <Card className="h-100 text-center">
                  <Card.Img variant="top" src={item.img} />
                </Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.kotitle}</Card.Text>
                </Card.Body>
              </Col>
            ))}
          </Row>
          <Row className='menu-box'>
            {products.slice(2, 6).map((item, idx) => (
              <Col key={idx + 2} md={3} className="mb-4 cards">
                <Card className="h-100 text-center">
                  <Card.Img variant="top" src={item.img} />
                </Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.kotitle}</Card.Text>
                </Card.Body>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button variant="outline-secondary">더보기</Button>
          </div>
        </Container>
      </section>
      {/* section - event */}
      <section className='event'>
        <Container className='event-inner'>
          <div className='title-box'>
            <h2 className="title">EVENT</h2>
            <p className="desc">
              시즌 한정 메뉴, 멤버십 혜택, 깜짝 할인까지<br />
              공차의 특별한 이벤트를 한눈에 확인해보세요.
            </p>
          </div>
          <Row className="event-grid">
            <Col md={7} className="event-item1 large event01">
              <img src="/images/event01.png" alt="Dress"/>
            </Col>
            <Col md={5} className="event-item2 d-flex flex-column justify-content-between">
              <div className="event-item small">
                <img src="/images/event02.png" alt="Watch" />
              </div>
              <div className="event-item small">
                <img src="/images/event03.png" alt="Sneaker" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* section - membership */}
      <section className='membership'>
      <h2 className='membership-title'>Membership</h2>
      <Container className='py-5'>
        <Row>
          <Col md={4} className='col'>
            <Card className='membership-card'>
            <Card.Img variant='top' src='/images/membership01.png'/>
            <Card.Title>10일~20일 카공데이!</Card.Title>
            <Card.Text>카카오페이머니로 결제 시,
            선착순 1천원 즉시 할인!
            </Card.Text>
            </Card>
          </Col>
          <Col md={4} className='col'>
            <Card className='membership-card'>
            <Card.Img variant='top' src='/images/membership02.png'/>
            <Card.Title>kt멤버십은 모두 모여라!</Card.Title>
            <Card.Text>제조 음료 전체 10% 할인</Card.Text>
            </Card>
          </Col>
          <Col md={4} className='col'>
            <Card className='membership-card'>
            <Card.Img variant='top' src='/images/membership03.png'/>
            <Card.Title>오늘은 공차데이</Card.Title>
            <Card.Text>14시 ~18시 결제 완료한 구매 고객 대상</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
      </section>
      {/* section - swiper */}
      <section className='swiper'>
      <div className="slider-wrapper">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/swiper-menu01.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper-menu02.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper-menu03.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper-menu04.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper-menu05.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper-menu06.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper-menu07.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper-menu08.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper-menu09.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper-menu10.png" alt="" />
        </SwiperSlide>
      </Swiper>

      {/* 고정 박스 */}
      <div className="fixed-box">
        <h2>NEW ARRIVALS</h2>
        <img src="/images/swiper-logo.png" alt="" />
      </div>
    </div>
      </section>
    </div>
  );
};

export default Home;
