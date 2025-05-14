
// This would normally use environment variables for API keys
// For demo purposes we're using a placeholder
const MOCK_PAYSTACK_KEY = "pk_test_mock_key_for_demo";

export const initializePayment = async (email: string, amount: number, currency: string = 'USD') => {
  // In a real implementation, this would call the actual Paystack API
  // For this demo, we'll simulate the API response
  
  console.log(`Initiating payment for ${email} with amount ${amount} ${currency}`);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return a mock response similar to Paystack's format
  return {
    status: true,
    message: "Authorization URL created",
    data: {
      authorization_url: "https://checkout.paystack.com/mock_checkout_url",
      access_code: "mock_access_code",
      reference: `ref_${Date.now()}`,
    }
  };
};

export const verifyTransaction = async (reference: string) => {
  console.log(`Verifying transaction with reference: ${reference}`);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return a mock response
  return {
    status: true,
    message: "Verification successful",
    data: {
      status: "success",
      reference,
      amount: 100000, // Amount in cents
      customer: {
        email: "investor@example.com"
      }
    }
  };
};
