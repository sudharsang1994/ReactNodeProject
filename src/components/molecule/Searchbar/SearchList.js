import React from 'react';
import Card from './Card';
import './Searchbar.css';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map( person =>  <Card key={person.id} person={person} />); 
  return (
    <div className="searchstyle">
      {filtered}
    </div>
  );
}

export default SearchList;