import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import sxios from 'axios'
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Kfj1KSChaOQiY7tRO6OkfWbl0SUdkBNu1AKY9PQ3pqj59Ws15hrw2YpRfRPaEVcrHHF1SWWVes0bHZjt5jc50dF00mxxEur6y';

  const onToken = token => {
    axios({
      url: "payment",
      method: 'post', //data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful')
    }).catch(error => {
      console.log('Payment error', JSON.parse(error));
      alert(
        'There was an issue with your payment, Please sure you use thr provided credit card.'
      )
    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
