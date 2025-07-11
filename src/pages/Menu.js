import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const allMenuItems = [
  { name: 'Taro Jewelry Signature Milk Tea', desc: '타로 쥬얼리 시그니처 밀크티', img: '/images/menu-desc 01.png' },
  { name: 'Taro Jewelry Signature Smoothie', desc: '타로 쥬얼리 시그니처 스무디', img: '/images/menu-desc02.png' },
  { name: 'Royal Milk Tea Red Bean Bingsu Shake', desc: '로얄 밀크티 팥 빙수 쉐이크', img: '/images/menu-desc03.png' },
  { name: 'Matcha Red Bean Bingsu Shake', desc: '말차 팥 빙수 쉐이크', img: '/images/menu-desc04.png' },
  { name: 'Chocolate-Coated Mint Cookie Smoothie', desc: '초코바른 민트 쿠키 스무디', img: '/images/menu-desc05.png' },
  { name: 'Chocolate-Coated Triple Choco Smoothie', desc: '초코바른 트리플 초코 스무디', img: '/images/menu-desc06.png' },
  { name: 'Melon Melon Milk Tea', desc: '멜론 멜론 밀크티', img: '/images/menu-desc07.png' },
  { name: 'Melon Melon Jelly Milk Tea', desc: '멜론 멜론 젤리 밀크티', img: '/images/menu-desc08.png' },
  { name: 'Melon Melon Jelly Crush', desc: '멜론 멜론 젤리 크러쉬', img: '/images/menu-desc09.png' },
  { name: 'Cheonggyul Yogurtea Crush + Pink Pearl', desc: '청귤 요거티 크러쉬 + 핑크펄', img: '/images/menu-desc10.png' },
  { name: 'Lemon Yogurt Smoothie + Pink Pearl', desc: '레몬 요구르트 스무디 + 핑크펄', img: '/images/menu-desc11.png' },
  { name: 'Greek Yogurt & Mango Milk Tea Crush', desc: '그릭 요거트 & 망고 밀크티 크러쉬', img: '/images/menu-desc12.png' },
  { name: 'Greek Yogurt & Strawberry Milk Tea Crush', desc: '그릭 요거트 & 딸기 밀크티 크러쉬', img: '/images/menu-desc13.png' },
  { name: 'Greek Yogurt & Milk Tea Crush', desc: '그릭 요거트 & 밀크티 크러쉬', img: '/images/menu-desc14.png' },
  { name: 'Brown Sugar Signature Milk Tea + Pearl', desc: '브라운슈가 시그니처 밀크티 +펄', img: '/images/menu-desc15.png' },
  { name: 'Brown Sugar Signature Milk Tea + Mini Pearl', desc: '브라운슈가 시그니처 밀크티 +미니펄', img: '/images/menu-desc16.png' },
  { name: 'Flat Peach Earl Grey Iced Tea + Real Peach', desc: '납작 복숭아 아이스티 얼그레이 + 리얼 복숭아', img: '/images/menu-desc17.png' },
  { name: 'Flat Peach Earl Grey Iced Tea', desc: '납작 복숭아 아이스티 얼그레이', img: '/images/menu-desc18.png' },
  { name: 'Chewy Mango Milk', desc: '츄잉 망고 밀크', img: '/images/menu-desc19.png' },
  { name: 'Brown Sugar Tofu Milk + Mini Pearl', desc: '흑당 두부 밀크 + 미니펄', img: '/images/menu-desc20.png' },
  { name: 'Dark Desire: Brown Sugar Tofu Milk Tea + Pearl', desc: '흑심 품은 흑당 두부 밀크티 + 펄', img: '/images/menu-desc21.png' },
  { name: 'Brown Sugar Tofu Crush + Mini Pearl', desc: '흑당 두부 크러쉬 + 미니펄', img: '/images/menu-desc22.png' },
  { name: 'Strawberry Matcha Milk Tea', desc: '딸기 말차 밀크티', img: '/images/menu-desc23.png' },
  { name: 'Strawberry Matcha Crush', desc: '딸기 말차 크러쉬', img: '/images/menu-desc24.png' },
];


const MenuList = () => {
  const [visibleCount, setVisibleCount] = useState(12); // 처음엔 12개만 보여줌
  const handleLoadMore = () => setVisibleCount(24); // 버튼 누르면 24개로 확장
  const visibleItems = allMenuItems.slice(0, visibleCount);

  return (
    <section className='menu-items container'>
      <Row>
        {visibleItems.map((item, index) => (
          <Col key={index} md={3} sm={6} xs={12} className="mb-4">
            <Card className="menu-card text-center">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {visibleCount < allMenuItems.length && (
        <div className="text-center mt-4">
          <Button variant="danger" onClick={handleLoadMore}>
            더보기
          </Button>
        </div>
      )}
    </section>
  );
};

const Menu = () => {
  return (
    <div className='menu'>
      {/* main */}
      <main className='main' style={{ backgroundImage: `url(/images/sub-main-bg.png)` }}>
        <h5>Menu</h5>
        <h2>전체메뉴</h2>
      </main>

      {/* nav */}
      <nav className='menu-nav'>
        <ul>
          <li><Link to="/bend">공차 이야기</Link></li>
          <li>|</li>
          <li><Link to="/new">신메뉴</Link></li>
          <li>|</li>
          <li><Link to="/menu">전체메뉴</Link></li>
        </ul>
      </nav>
      <div className='bar'></div>
      <h2>공차의 메뉴를 소개합니다</h2>
      {/* 메뉴 리스트 */}

      <MenuList />
    </div>
  );
};

export default Menu;
