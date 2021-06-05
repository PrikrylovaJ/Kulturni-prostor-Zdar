import React, { useEffect, useState } from 'react';
import { db } from '../db';
import { Form } from '../Formular';
import { exhibitions } from '../Data';
import './style.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

export const ExhibitionDetail = () => {
  const [review, setReview] = useState([]);

  let { idExhibition } = useParams();
  const exhibition = exhibitions[idExhibition];

  const images = exhibition.photo.map((photo) => ({
    thumbnail: photo,
    original: photo,
  }));

  useEffect(() => {
    db.collection('review').onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
      });
      setReview(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        }),
      );
    });
  }, []);

  return (
    <>
      <h2>{exhibition.author}</h2>
      <p>{exhibition.date}</p>
      {exhibition.text.map((detail, index) => (
        <p key={index}>{detail}</p>
      ))}
      <div className="image-gallery">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </div>
      <button>Vstupenky</button>
      <Link to="/tickets">Vstupenky</Link>
      {review.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.text}</div>
          <div>{item.date?.toDate().toString()}</div>
        </div>
      ))}
      <Form />
    </>
  );
};
