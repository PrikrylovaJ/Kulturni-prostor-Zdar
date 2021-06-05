import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const ExhibitionCard = ({image, author, title, date, place, id}) => {
  return (
    <div className="exhibiton-card">
      <img
        className="exhibition-card__image"
        src={image}
        height="200px"
        width="280px"
        alt=""
      />
      <Link className="exhibition-card__author" to={"exhibitions/" + id}>
        {author}
      </Link>
      <p className="exhibition-card__title">{title}</p>
      <p className="exhibition-card__date">{date}</p>
      <p className="exhibition-card__place">{place}</p>
    </div>
  );
};
