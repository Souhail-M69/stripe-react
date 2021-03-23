import React from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'



const PUBLIC_KEY = "pk_test_51IWOAMEb6PUzIM470UmulFgR44n1bcf4Qb0hG2oGNA4rO1pURNSnf39t9tBCRZMDpbCUG6e9rYG46mtqNjvrmARi00QtqTwc1w"

const stripeTestPromise = loadStripe(PUBLIC_KEY)


export default function StripeForm() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
