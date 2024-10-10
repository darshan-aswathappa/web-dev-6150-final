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
      newErrors.cardNumber = 'Invalid card number';
    }
    if (!expiryRef.current.value || !isValidExpiry(expiryRef.current.value)) {
      newErrors.expiry = 'Invalid expiry date';
    }
    if (!cvcRef.current.value || cvcRef.current.value.length !== 3) {
      newErrors.cvc = 'Invalid CVC';
    }
    if (!nameRef.current.value) {
      newErrors.name = 'Name is required';
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  };

  const isValidCardNumber = (number) => {
    let input = number.replace(/\D/g, '')
    const cardNumberRegex = /^[0-9]{16}$/;
    return cardNumberRegex.test(input);
  };

  const formatCardNumber = () => {
    let input = cardNumberRef.current.value;
    input = input.replace(/\D/g, '');

    if (input.length === 0) {
      input = '';
    } else if (input.length <= 4) {
      input = `${input}`;
    } else if (input.length <= 8) {
      input = `${input.substring(0, 4)} ${input.substring(4)}`;
    } else if (input.length <= 12) {
      input = `${input.substring(0, 4)} ${input.substring(4,8)} ${input.substring(8)}`;
    } else {
      input = `${input.substring(0, 4)} ${input.substring(4,8)} ${input.substring(8,12)} ${input.substring(12,16)}`;
    }

    cardNumberRef.current.value = input;
  }

  const handleCardNumberChange = () => {
    formatCardNumber();
    validateForm();
  };

  const isValidExpiry = () => {
    let input = cardNumberRef.current.value;
    input = input.replace(/\D/g, '');
    if (input.length !== 4) {
      return false;
    }
    let m = parseInt(input.substring(0,2));
    if (m<1 || m>12) {
      return false;
    }
    return true;
  }

  const formatExpiry = () => {
    let input = expiryRef.current.value;
    input = input.replace(/\D/g, '');
    if (input.length >= 2) {
      input = `${input.substring(0,2)}/${input.substring(2,4)}`
    }
    expiryRef.current.value = input;
  };

  const handleExpiryChange = () => {
    formatExpiry();
    validateForm();
  };

  const formatCVC = () => {
    let input = cvcRef.current.value;
    input = input.replace(/\D/g, '');
    input = input.substring(0,3);
    cvcRef.current.value = input;
  };

  const handleCVCChange = () => {
    formatCVC();
    validateForm();
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
                    onChange={handleCardNumberChange}
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
                      placeholder="MM/YY"
                      ref={expiryRef}
                      onChange={handleExpiryChange}
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
                      onChange={handleCVCChange}
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
