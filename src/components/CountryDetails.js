// src/components/CountryDetails.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    
    country(code:$code){
        name,
        native,
        currency,
        states{
          code,
          name
        }
      }
  }
`;

const CountryDetails = ({ countryCode }) => {
  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code: countryCode },
  });
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data.country;

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Native Name: {country.native}</p>
      <p>Number of states: {country.states.length}</p>
      <p>States: {country.states.map(curr => curr.name).join(', ')}</p>
     
    </div>
  );
};

export default CountryDetails;
