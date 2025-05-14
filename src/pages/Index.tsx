
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-invest-blue to-invest-navy text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Invest in Africa's Future</h1>
            <p className="text-xl md:text-2xl mb-8">A transparent gateway for cross-border investments with automatic tax handling</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard" className="bg-invest-accent text-invest-blue font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all">
                View Dashboard
              </Link>
              <Link to="/invest" className="bg-white text-invest-blue font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all">
                Start Investing
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-invest-blue mb-12">Why InvestAfrica Gateway?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="bg-invest-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-invest-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Automatic Tax Handling</h3>
            <p className="text-gray-600">We calculate and withhold taxes automatically based on the country's regulations, so you don't have to worry about compliance.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="bg-invest-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-invest-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
            <p className="text-gray-600">All investments are processed through our secure payment gateway with industry-standard encryption.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="bg-invest-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-invest-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Transparent Returns</h3>
            <p className="text-gray-600">Track your investments and potential returns in real-time with our intuitive dashboard.</p>
          </div>
        </div>
      </div>
      
      {/* Countries Section */}
      <div className="bg-invest-gray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-invest-blue mb-12">Invest Across Africa</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-semibold">Kenya</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-semibold">Nigeria</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-semibold">South Africa</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-semibold">Egypt</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-semibold">Ghana</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-semibold">Rwanda</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-semibold">Ethiopia</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-semibold">Uganda</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-semibold">Tanzania</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-semibold">Côte d'Ivoire</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-invest-blue mb-4">Ready to Invest in Africa's Growth?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Join investors from around the world who are tapping into Africa's innovative startups and high-growth potential.</p>
        <Link to="/invest" className="invest-button text-lg px-8 py-3">
          Start Investing Now
        </Link>
      </div>
      
      {/* Footer */}
      <footer className="bg-invest-blue text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-invest-accent font-bold text-xl">Invest</span>
              <span className="font-bold text-xl">Africa</span>
              <p className="text-sm mt-2">The gateway to African investments</p>
            </div>
            <div className="flex gap-8">
              <Link to="/dashboard" className="hover:text-invest-accent">Dashboard</Link>
              <Link to="/invest" className="hover:text-invest-accent">Invest</Link>
              <Link to="/tax-info" className="hover:text-invest-accent">Tax Info</Link>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
            <p>&copy; 2023 InvestAfrica Gateway. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
