import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = () => {
    const [error, setError]= useState('')
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return
        }    

        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }

        const {error, paymentMethod}= await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('payment error', error);
            setError(error.message)
        }else{
            console.log('payment method', paymentMethod);
            setError('')
        }



    }

    return (
        <form className="min-h-32" onSubmit={handleSubmit}>
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

            <button className="py-2 px-4 mt-10 rounded-md bg-orange-400 hover:bg-green-400 transition-transform duration-300 hover:scale-105 text-white" type="submit" disabled={!stripe}>
                Pay
            </button>
            
            <p className="text-red-600 mt-2">{error} </p>
        </form>
    );
};

export default CheckOutForm;