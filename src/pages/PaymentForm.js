
import React, { useState, useEffect } from 'react';
import { PaystackButton } from 'react-paystack';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

function PaymentForm() {
  const [email, setEmail] = useState('');
  const amount = 2000;
  const publicKey = ''; 
  const history = useNavigate();
  const [paid, setPaid] = useState(false); 
  const [userId, setUserId] = useState(null);
  useEffect(() => {
   
    axios.get('http://localhost:4000/get-user-id') 
      .then((response) => {
        setUserId(response.data.userId);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
   
    axios.get(`http://localhost:4000/check-payment/${userId}`)
      .then((response) => {
        setPaid(response.data.paid);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);

  const onSuccess = (response) => {
    axios.post(`/update-payment/${userId}`)
      .then(() => {
        setPaid(true); 
        history.push('/streaming');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onClose = () => {
    console.log('Payment closed.');
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
  };

  const handleCheckPayment = () => {
 
    axios.get(`http://localhost:4000/check-payment/${userId}`)
      .then((response) => {
     
        console.log('Payment Status:', response.data.paid);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  const handleDisplayUserId = () => {
   
    console.log('User ID:', userId);
  };

  return (
    <div className='text-black bg-white'>
      <h2>Make a Payment</h2>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      /> <br/>
      <div>
        <p>Amount: ₦{amount}</p>
      </div>
      <PaystackButton
        text="Pay Now"
        className="paystack-button"
        callback={onSuccess}
        close={onClose}
        disabled={!email}
        embed={false}
        reference={`user_${userId}_${Date.now()}`}
        email={email}
        amount={amount * 100}
        publicKey={publicKey}
      />
      <button onClick={handleCheckPayment}>Check Payment Status</button>
      <button onClick={handleDisplayUserId}>Display User ID</button>
    </div>
  );
}

export default PaymentForm;
