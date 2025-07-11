import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Bend = () => {
  return (
    <div className='bend'>
      {/* main */}
      <main className='main' style={{ backgroundImage: `url(/images/sub-main-bg.png)` }}>
        <h5>Gongcha Bend</h5>
        <h2>공차 이야기</h2>
      </main>

      {/* section - nav */}
      <nav className='bend-nav'>
        <ul>
          <li><Link to="/bend">공차 이야기</Link></li>
          <li>|</li>
          <li><Link to="/">신메뉴</Link></li>
          <li>|</li>
          <li><Link to="/">전체메뉴</Link></li>
        </ul>
      </nav>

      {/* section - bendinfo */}
      <section className='bend-info'>
        <div className="bend-info-inner">
          <div className='bar'></div>
          <h2>공차는 처음이신가요?</h2>
          <p>
            공차는 오리지널 티(Tea)와 밀크티, 스무디, 과일믹스 등의 메뉴를 베이스로 <br />
            5가지 당도와 얼음량, 토핑까지 선택할 수 있어 취향에 따라
            <strong> 커스터마이징</strong>하여 주문 가능합니다. <br />
            약 600여 가지의 다양한 조합으로 음료를 즐길 수 있습니다.
          </p>
          <img src="/images/bend-info-img.png" alt="" />
        </div>
      </section>

      {/* section - custom */}
      <section className='custom'>
        <div className="custom-inner">
          <div className='bar'></div>
          <h2>커스터마이징 주문 방법</h2>
          <div className="custom-box">
            <div className="custom-step01">
              <h5>STEP 01</h5>
              <h3>TEA MENU</h3>
              <p>취향에 맞게 공차의 음료를 고르세요.</p>
              <div className="step01-item">
                <img src="/images/tea-menu01.png" alt="오리지널티" />
                <span>오리지널티 <br />(Hot & Iced)</span>
              </div>
              <div className="step01-item">
                <img src="/images/tea-menu02.png" alt="밀크티" />
                <span>밀크티 <br />(Hot & Iced)</span>
              </div>
              <div className="step01-item">
                <img src="/images/tea-menu03.png" alt="프롯티" />
                <span>프롯티 <br />(Hot & Iced)</span>
              </div>
              <div className="step01-item">
                <img src="/images/tea-menu04.png" alt="쥬얼리" />
                <span>쥬얼리 <br />(Iced only)</span>
              </div>
            </div>

            <div className="custom-step02">
              <h5>STEP 02</h5>
              <h3>TOPPINGS</h3>
              <p>6가지 토핑 중 원하는 토핑을 선택하세요.</p>
              <Container className='py-5 step02-items'>
                <Row>
                  <Col md={6}>
                    <Card>
                      <Card.Img variant='top' src='/images/toppings01.png' />
                      <Card.Title>밀크폼</Card.Title>
                      <Card.Text>Milk Foam</Card.Text>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card>
                      <Card.Img variant='top' src='/images/toppings02.png' />
                      <Card.Title>펄(타피오카)</Card.Title>
                      <Card.Text>Pearl</Card.Text>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Card>
                      <Card.Img variant='top' src='/images/toppings03.png' />
                      <Card.Title>코코넛</Card.Title>
                      <Card.Text>Coconut</Card.Text>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card>
                      <Card.Img variant='top' src='/images/toppings04.png' />
                      <Card.Title>알로에</Card.Title>
                      <Card.Text>Aloe</Card.Text>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Card>
                      <Card.Img variant='top' src='/images/toppings05.png' />
                      <Card.Title>화이트펄</Card.Title>
                      <Card.Text>White Pearl</Card.Text>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card>
                      <Card.Img variant='top' src='/images/toppings06.png' />
                      <Card.Title>치즈폼</Card.Title>
                      <Card.Text>Cheese Foam</Card.Text>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="custom-step03">
              <h5>STEP 03</h5>
              <h3>SWEET&ICEGRADE</h3>
              <p>당도와 얼음량을 원하시는 만큼 조절하세요.</p>
              <div className="step03-item">
                <img src="/images/swtee01.png" alt="오리지널티" />
                <p>당도 선택</p>
              </div>
              <div className="step03-item">
                <img src="/images/swtee02.png" alt="밀크티" />
                <p>얼음 선택</p>
              </div>
            </div>
          </div>
          <img src="/images/bend-botton-img.png" alt="" className='bend-botton-img'/>
        </div>
      </section>
    </div>
  );
};

export default Bend;