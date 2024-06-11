/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../../Hooks/AxiosSecure/AxiosSecure";
import UseAuth from "../../../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = ({ camp, closeModal, refetch }) => {

    const { user } = UseAuth();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();

    useEffect(() => {
        if (camp?.campFees) {
            axiosSecure.post('/create-payment-intent', { campFees: camp.campFees })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
                .catch(error => {
                    console.error('Error creating payment intent:', error);
                });
        }
    }, [axiosSecure, camp?.campFees]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (paymentError) {
            setError(paymentError.message);
            console.log(paymentError.message)
        } else {
            // console.log('payment method', paymentMethod)
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirmError) {
            setError(confirmError.message);
            // console.log(confirmError.message)
        } 
        else {

            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                // console.log(paymentIntent)

                Swal.fire({
                    title: `Transaction id ${paymentIntent.id}`,
                    text: "Payment Successful.",
                    icon: "success"
                });
                closeModal();
                refetch();
            }
        }
    };

    return (
        <form className="min-h-32 mt-10" onSubmit={handleSubmit}>
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
            <div>
                <p className="text-red-600 mt-5">{error}</p>
                <button
                    className="py-2 px-4 mt-5 rounded-md bg-orange-400 hover:bg-green-400 transition-transform duration-300 hover:scale-105 text-white"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
                {transactionId && <p>{transactionId} </p>}
            </div>
        </form>
    );
};

export default CheckOutForm;
