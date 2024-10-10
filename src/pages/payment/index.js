import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import MainLayout from 'layout/main';
import 'style/pricing/pricing.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function PaymentGateway() {
  const cardNumberRef = useRef();
  const expiryRef = useRef();
  const cvcRef = useRef();  
  const nameRef = useRef();
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const notify = () => toast('Subscribed successfully!!');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    clearForm();
    // toast not working so i will redirect for now
    navigate("/");
    notify();
  };

  const clearForm = () => {
    cardNumberRef.current.value = '';
    expiryRef.current.value = '';
    cvcRef.current.value = '';
    nameRef.current.value = '';
    setErrors({});
  };

  const validateForm = () => {
    let newErrors = {};
    if (!cardNumberRef.current.value || !isValidCardNumber(cardNumberRef.current.value)) {
      newErrors.cardNumber = 'Invalid card number.';
    }
    if (!expiryRef.current.value) {
      newErrors.expiry = 'Expiry date is required.';
    }
    if (!cvcRef.current.value || cvcRef.current.value.length !== 3) {
      newErrors.cvc = 'Invalid CVC.';
    }
    if (!nameRef.current.value) {
      newErrors.name = 'Name is required.';
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  };

  const isValidCardNumber = (number) => {
    const cardNumberRegex = /^[0-9]{16}$/;
    return cardNumberRegex.test(number);
  };

  return (
    <MainLayout>
      <Container fluid>
        <Row className="justify-content-center">
          <Col sm={8} xs={12} lg={5} className="py-4 px-5">
            <div className="text-center">
              <h2>Payment Gateway</h2>
              <p>Please enter your card details to proceed with the payment.</p>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="cardNumber">
                <Form.Label>Card Number</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    ref={cardNumberRef}
                    onChange={validateForm}
                  />
                </InputGroup>
                {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="expiry">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="MM / YY"
                      ref={expiryRef}
                      onChange={validateForm}
                    />
                    {errors.expiry && <div className="error">{errors.expiry}</div>}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="cvc">
                    <Form.Label>CVC</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="CVC"
                      ref={cvcRef}
                      onChange={validateForm}
                    />
                    {errors.cvc && <div className="error">{errors.cvc}</div>}
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name on Card</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  ref={nameRef}
                  onChange={validateForm}
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit" disabled={!isFormValid}>
                  Proceed to Payment
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}
