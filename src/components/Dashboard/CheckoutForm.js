import React,{useState,useEffect} from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
const CheckoutForm = ({user}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const {price,name,email,_id} =user;
 
    // console.log(price)
    useEffect(() => {
        fetch('https://pacific-scrubland-09811.herokuapp.com/create-payment-intent', {
            method: 'POST',
             headers: {
                'content-type': 'application/json',
                // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if(data?.clientSecret) {
                    console.log(data)
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])
    // console.log(clientSecret)
    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '')
        setSuccess('');

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
            // setProcessing(false);
        }

        else {
            setCardError('');
            console.log(paymentIntent);
            setTransactionId(paymentIntent.id);
            setSuccess('Congrats! Your payment is completed.')



                        //store payment on database
                        const payment = {
                            appointment: _id,
                            transactionId: paymentIntent.id
                        }
                        fetch(`https://pacific-scrubland-09811.herokuapp.com/booking/${_id}`, {
                            method: 'PATCH',
                            headers: {
                                'content-type': 'application/json',
                                // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                            },
                            body: JSON.stringify(payment)
                        }).then(res=>res.json())
                        .then(data => {
                            setProcessing(false);
                            console.log(data);
                        })
            
                    }
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe }>
                    Pay
                </button>
            </form>

            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            }
        </div>
    );
    
}

export default CheckoutForm;