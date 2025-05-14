
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { countries, getCountryTaxInfo } from '../services/taxEngine';

const TaxInfo = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const taxInfo = selectedCountry ? getCountryTaxInfo(selectedCountry) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-invest-blue mb-6">Tax Information</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Understanding Investment Taxes in Africa</h2>
            <p className="text-gray-600 mb-4">
              Investing across African markets involves understanding various tax implications. 
              Different countries have different withholding tax rates on investment returns. 
              The InvestAfrica Gateway platform handles these complexities for you by automatically 
              calculating and withholding the appropriate taxes.
            </p>
            <p className="text-gray-600">
              Select a country below to learn more about its specific tax regulations for investments.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold mb-4">Select a Country</h3>
                <select
                  className="invest-select"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">-- Select a Country --</option>
                  {countries.map(country => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              {taxInfo ? (
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-semibold text-invest-blue mb-4">{taxInfo.name} Tax Information</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Withholding Tax Rate</h4>
                    <div className="bg-invest-gray p-3 rounded-md text-center">
                      <span className="text-2xl font-bold text-invest-blue">{taxInfo.taxRate}%</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Description</h4>
                    <p className="text-gray-600">{taxInfo.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Documentation Requirements</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {taxInfo.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="bg-invest-gray rounded-lg p-6 flex items-center justify-center h-full">
                  <p className="text-gray-500">Select a country to view tax information</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxInfo;
