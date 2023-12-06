import { Form, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const [sessionVariable, setSessionVariable] = useState(() => {
    const storedSessionVariable = localStorage.getItem('sessionVariable');
    return storedSessionVariable || 'default';
  });

  // Log the initialized session variable
  console.log('Initialized Session Variable', sessionVariable);

  useEffect(() => {
    console.log('Homepage Session Variable', sessionVariable);
  }, [sessionVariable]);

  const [user, setUser] = useState({
    id: '',
    userID: '',
    password: '',
    fName: '',
    lName: '',
    securitylvl: '',
  });

  const changeValue = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const updateSessionVariable = (newValue) => {
    setSessionVariable(newValue);
    console.log('Updated Session Variable', newValue);
  };

  const checkLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/checkUserLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response Body:', data);

        if (data.userID === user.userID) {
          console.log('Before updating Session Variable', sessionVariable);
          updateSessionVariable(data.userID);
          navigate('/');
        }
      } else {
        console.error('Server returned an error:', response.status);
        alert('Login Failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('Login Failed');
    }
  };

  return (
    <div>
      <Form onSubmit={checkLogin}>
        <Form.Group controlId="formUserNAMELogin">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={changeValue}
            name="userID"
            value={user.userID}
          />
        </Form.Group>
        <Form.Group controlId="formUserPWDLogin">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Password"
            onChange={changeValue}
            name="password"
            value={user.password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;