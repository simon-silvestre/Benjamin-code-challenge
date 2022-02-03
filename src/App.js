import React, { useState } from 'react'
import Content from './Components/Content';

function App() {

  const [data] = useState([
    {
      logo: 'Images/logo1.png',
      img: 'Images/image1.png',
      title: 'Un nouvel espoir',
      text: 'C\'est le premier opus de la saga Star Wars par sa date de sortie, mais le quatrième selon l\'ordre chronologique de l\'histoire.',
      date: '1977'
    },
    {
      logo: 'Images/logo2.png',
      img: 'Images/image2.png',
      title: 'L\'empire contre-attaque',
      text: 'Le maléfique Empire galactique construit une nouvelle station spatiale Étoile de la mort pour anéantir définitivement l\'Alliance rebelle.',
      date: '1980'
    },
    {
      logo: 'Images/logo3.png',
      img: 'Images/image3.png',
      title: 'Le retour du Jedi',
      text: 'La guerre entre le maléfique Empire galactique et son antagoniste, l’Alliance rebelle, bat son plein.',
      date: '1983'
    }
  ])

  const [index] = useState(0)

  return (
    <div className="App">
      <Content
          logo={data[index].logo}
          img={data[index].img}
          title={data[index].title}
          text={data[index].text}
          date={data[index].date}
        />

      <div className="nav">
        <div className="arrows">
          <img src="Images/leftArrow.png" alt="" className="left" />
          <img src="Images/rightArrow.png" alt="" className="right" />
        </div>

        <div className="navBar">
          <div className="progressBar">
            <span className="bar"></span>
          </div>
          <span className="checkpoint"></span>
          <span className="checkpoint"></span>
          <span className="checkpoint"></span>
          <span className="checkpoint"></span>
          <span className="checkpoint"></span>
        </div>
      </div>
    </div>
  );
}

export default App;
