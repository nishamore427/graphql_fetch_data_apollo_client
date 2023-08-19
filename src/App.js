// src/App.js
import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Country Explorer</h1>
        <CountryList onSelectCountry={setSelectedCountry} />
        {selectedCountry && <CountryDetails countryCode={selectedCountry} />}
      </div>
    </ApolloProvider>
  );
};

export default App;
