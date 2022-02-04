import React, { useState } from 'react'
import Content from './Components/Content';
import Nav from './Components/Nav';

function App() {

  const [data] = useState([
    {
      logo: 'Images/logo1.png',
      title: 'Un nouvel espoir',
      text: 'C\'est le premier opus de la saga Star Wars par sa date de sortie, mais le quatrième selon l\'ordre chronologique de l\'histoire.',
      date: '1977'
    },
    {
      logo: 'Images/logo2.png',
      title: 'L\'empire contre-attaque',
      text: 'Le maléfique Empire galactique construit une nouvelle station spatiale Étoile de la mort pour anéantir définitivement l\'Alliance rebelle.',
      date: '1980'
    },
    {
      logo: 'Images/logo3.png',
      title: 'Le retour du Jedi',
      text: 'La guerre entre le maléfique Empire galactique et son antagoniste, l’Alliance rebelle, bat son plein.',
      date: '1983'
    }
  ])

  const [index, setIndex] = useState(0)

  function setIndexPlus() {
    if(index < data.length - 1) {
      setIndex(index + 1)
    }
  }

  function setIndexMoins() {
    if(index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <div className="App">
      <Content
          logo={data[index].logo}
          index={index}
          title={data[index].title}
          text={data[index].text}
          date={data[index].date}
        />

      <Nav 
        index={index}
        setIndexPlus={setIndexPlus}
        setIndexMoins={setIndexMoins}
      />
    </div>
  );
}

export default App;
