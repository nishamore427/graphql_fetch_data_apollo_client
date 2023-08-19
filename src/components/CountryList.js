// src/components/CountryList.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
    }
  }
`;

const CountryList = ({ onSelectCountry }) => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  console.log(data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.countries.map(country => (
        <li key={country.code}>
          {country.name}
          <button onClick={() => onSelectCountry(country.code)}>Details</button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
