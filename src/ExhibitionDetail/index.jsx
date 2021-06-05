import React, { useEffect, useState } from 'react';
import { db } from '../db';
import { Formular } from '../Formular';
import { exhibitions } from '../Data';
import './style.css';
import {
  useParams
} from "react-router-dom";


export const ExhibitionDetail = () => {
  const [review, setReview] = useState([]);

  let { idExhibition } = useParams();
  const exhibition = exhibitions[idExhibition];

  useEffect(() => {
    db.collection('vystavy').onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.data())
      })
      setReview(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id
          return data
      }))
    })
  }, [])

  return (
    <>
      <h2>{exhibition.author}</h2>
      <p>{exhibition.date}</p>
      {exhibition.text.map((detail, index) => <p key={index}>{detail}</p>)}
      {exhibition.photo.map((detail, index) => <img key={index} src={detail} width="450px" height="450px" alt="" />)}
      <button>Vstupenky</button>
      {review.map((item) => <div key={item.id}>{item.nazev}</div>)}
      <Formular/>
    </>
  );
};