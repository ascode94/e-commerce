import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    //convert dollars to cents
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HDUAeIIcluBrQ6DTOMz6aRrZQxzIbAuRkjNSNw5gPlbxp42I5WDJf0zUnbFFQlBs7igGlsv13ab5F8rUfrYaJ0z00K7biRHUJ'

    const onToken = token => {
        alert('Payment Successful')
    }
    
    return (
        <StripeCheckout
        label='Pay Now'
        name='E-Commerce'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton