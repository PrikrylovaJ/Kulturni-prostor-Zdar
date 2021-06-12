import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { storage } from '../../db';

export const ExhibitionCard = ({
  image,
  author,
  dateTo,
  dateFrom,
  place,
  id,
}) => {
  const [photoURL, setPhotoURL] = useState(undefined);

  useEffect(() => {
    storage
      .ref(image)
      .getDownloadURL()
      .then((url) => setPhotoURL(url));
  }, []);

  return (
    <div className="exhibition-card">
      <Link className="exhibition-card__author" to={'exhibitions/' + id}>
        {' '}
        <img
          className="exhibition-card__image"
          src={photoURL}
          alt="titulni_obrazek_vystavy"
        />
        {author}
      </Link>
      <p className="exhibition-card__date">
        {dateFrom.toLocaleDateString()} - {dateTo.toLocaleDateString()}
      </p>
      <p className="exhibition-card__place">{place}</p>
    </div>
  );
};
