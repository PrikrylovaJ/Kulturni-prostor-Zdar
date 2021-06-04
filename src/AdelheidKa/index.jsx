import React from 'react';
import './style.css';

// const vystavy = [
//   {
//     autor: "AdelheidKa",
//     datum: "2. čer. - 30. čer.2021",
//     text1: "Adéla Tománková k malování tíhla odjakživa. Umělecky se začala více formovat na půdě ArtIn-Atelier Prague. Později studovala oděvní tvorbu, ale malování v jejím životě i tak jednoznačně zvítězilo.",
//     text2: "V jejich obrazech se promítají životní příběhy i prožitky, především ve figurální malbě a imaginární krajinomalbě. Její velkou inspirací je také příroda, která jí učí světlu, perspektivě, tvarům i rozmanitosti barev. Náměty na obrazy zkrátka nemusím složitě hledat, jsou všude kolem. Stačí je vnímat a nechat pracovat představivost.",
//     photo: "/assets/Adelheid Ka/AdelheidKa3.jpg",
//   },
// ]

export const AdelheidKa = () => {
  return (
    <>
      <h2>Adelheid Ka</h2>
      <p>2. čer. - 30. čer.2021</p>
      <p>Adéla Tománková k malování tíhla odjakživa. Umělecky se začala více formovat na půdě ArtIn-Atelier Prague. Později studovala oděvní tvorbu, ale malování v jejím životě i tak jednoznačně zvítězilo.</p>
      <p>V jejich obrazech se promítají životní příběhy i prožitky, především ve figurální malbě a imaginární krajinomalbě. Její velkou inspirací je také příroda, která jí učí světlu, perspektivě, tvarům i rozmanitosti barev. Náměty na obrazy zkrátka nemusím složitě hledat, jsou všude kolem. Stačí je vnímat a nechat pracovat představivost.</p>
      <img src="/assets/Adelheid Ka/AdelheidKa3.jpg" width="450px" height="450px" alt="" />
      <button>Vstupenky</button>
    </>
  );
};