// components/LoginModal.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { RiKakaoTalkFill } from "react-icons/ri";


const LoginModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <img src="/images/gongcha-logo-big-bk.png" alt="" />
        <Modal.Title>로그인</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="이메일" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Control type="password" placeholder="비밀번호" />
          </Form.Group>

          <Button type="submit" className="mt-3 w-100 login-btn">
            Login
          </Button>
          <p>비밀번호를 잊어버리셨나요?</p>
          <p className='btn-p'>계정이 없으신가요? <a>회원가입</a></p>
          <p className='btn-or'>OR</p>
          <Button type="submit" className="mt-3 w-100 kakao">
          <RiKakaoTalkFill className='kakao-icon' />카카오로 로그인하기
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
