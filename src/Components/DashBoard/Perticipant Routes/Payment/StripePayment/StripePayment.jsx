import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


// todo add pk key
const stripePromise = loadStripe('')

const StripePayment = () => {
    return (
        <div>
           <Elements stripe={stripePromise}>

           </Elements>
        </div>
    );
};

export default StripePayment;