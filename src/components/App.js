import '../styles/main.scss';
//import CardPreview from './CardPreview';
import { useState } from 'react';

//Servicios
import dataApi from '../servicies/api';

//Componente
import Create from './Create';

function App() {
  //ESTADOS
  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: 'fgg',
  });

  const [apiData, setApiData] = useState({});

  //EVENTOS
  //Esta función tengo que cambiarla. Porque AQUI NO escucho el EVENTO, lo escucho en DESIGN y en FILL ---por tanto  con ev.target.name --> me dice sobre cual input esto interactuando  ---- ev.target.value--> me da el valor de ese input ----todo esto lo recojo en el componente donde se escucha el evento DESIGN y FILL
  //creo objeto DATA con las propiedades name y value. le puedo poner las propiedades que quiera
  const handleInputParent = (data) => {
    const inputValue = data.value;
    const inputChanged = data.name;
    //En la función que me cambia los datos de mi constante de estado, le digo que guardo lo que tengo (MI OBJETO DATA CARD) + el input que ha cambiado (lo encuentro con name)le meto el valor con el que ha cambiado(value)
    setDataCard({
      ...dataCard,
      [inputChanged]: inputValue,
    });

    // console.log(dataCard);
  };

  const handleClickCreateCardParent = () => {
    dataApi(dataCard).then((info) => {
      console.log(info);
      setApiData(info);
    });
  };

  const handleResetBtn = () => {
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: 'fgg',
    });
  };

  return (
    <>
      {/*Nos quedamos solo con CREATE, que contiene: HEADER /FORM: DESIGN - FILL - SHARE / FOOTER}*/}
      {/*Le pasamos por PROPS:
    - CONTANTE DE ESTADO : DATACARD que contiene un objeto vacío que va cambiando con la interactividad de la usuaria*/}
      {/*Le pasamos por PROPS la función HANDLE INPUT PARENT que controla los botones de las peltas de colores - Y los inputs del formulario-   esta función se ejecutará en DESIGN  y en FILL*/}
      {/*Le pasamos por PROPS la función HANDLECLICK CREATE CARD PARENT - que controla los botones de las peltas de colores - Y los inputs del formulario-   esta función se ejecutará en DESIGN  y en FILL*/}

      <Create
        dataCard={dataCard}
        //EL nombre de la propiedad es lo que luego meto en el caminito del props en los componentes.
        handleInputParent={handleInputParent}
        handleClickCreateCardParent={handleClickCreateCardParent}
        /*Paso por props toda la api, podría pasar solo los datos que encesito*/
        apiData={apiData}
        handleReset={handleResetBtn}
      />
    </>
  );
}

export default App;
