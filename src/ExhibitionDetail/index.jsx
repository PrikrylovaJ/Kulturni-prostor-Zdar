import React, { useEffect, useState } from 'react';
import { db } from '../db';
import { storage } from '../db';
import { Form } from '../Formular';
import { exhibitions } from '../Data';
import './style.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

export const ExhibitionDetail = () => {
  const [reviews, setReview] = useState([]);
  const [exhibition, setExhibition] = useState(null);
  const [photos, setPhotos] = useState([]);

  let { idExhibition } = useParams();

  useEffect(() => {
    db.collection('exhibitions').doc(idExhibition).onSnapshot((snapshot) => {
      const exhibition = snapshot.data()
      setExhibition(exhibition);
      const promises = exhibition?.photos.map((photo) => {
        return storage.ref(photo).getDownloadURL()
      });
      Promise.all(promises).then(values => {setPhotos(values)})
    });
  }, []);

  const images = photos?.map((photo) => {
    return {
      original: photo,
    }
  })


  useEffect(() => {
    db.collection('exhibitions').doc(idExhibition).collection('reviews').onSnapshot((snapshot) => {
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
    exhibition ? (
      <div>
          <h2>{exhibition.author}</h2>
          <p>{exhibition.dateFrom.toDate().toLocaleDateString()} - {exhibition.dateTo.toDate().toLocaleDateString()}</p>
          {exhibition.text}
          {exhibition.text1}
          <Link to="/tickets">Vstupenky</Link>
            <ImageGallery
              items={images}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          {reviews.map((item) => (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.text}</div>
              <div>{item.date?.toDate().toLocaleDateString()}</div>
            </div>
          ))}
          <Form exhibitionId={idExhibition}/>
          </div>) : ('')
  );
};
