import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { ExhibitionCard } from './ExhibitionCard';
import { exhibitions } from '../Data';

export const Exhibitions = () => {
  return (
    <section>
      <h1>Výstavy</h1>
      {Object.keys(exhibitions).map((id) => (
        <ExhibitionCard
          image={exhibitions[id].photo[0]}
          author={exhibitions[id].author}
          date={exhibitions[id].date}
          place={exhibitions[id].place}
          title={exhibitions[id].title}
          id={id}
        />
      ))}
    </section>
  );
};
