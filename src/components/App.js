import '../styles/main.scss';
import { useState } from 'react';
import logo from '../images/boolean_logo.png';
import bottomFavicon from '../images/favicon-32x32.png';

//Servicios
import dataApi from '../servicies/api';

//Componente
import CardPreview from './CardPreview';

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

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;
    setDataCard({
      ...dataCard,
      [inputChanged]: inputValue,
    });
    // console.log(dataCard);
  };

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(dataCard).then((info) => {
      console.log(info);
      setApiData(info);
    });
  };

  // const handleResetBtn = () => {
  //   setDataCard({
  //     palette: '1',
  //     name: '',
  //     job: '',
  //     email: '',
  //     phone: '',
  //     linkedin: '',
  //     github: '',
  //     photo: '',
  //   });
  // };

  return (
    <>
      <header className="header">
        <img
          className="header__img"
          src={logo}
          alt="Logo imagenes"
          title="Logo imagenes"
        />
      </header>

      <section className="box-preview">
        <CardPreview data={dataCard} />

        <section className="section-form">
          <form action="" className="">
            <fieldset className="fieldset  fieldset-colours">
              <section className="design ">
                <div className="design__box">
                  <a href="http://">
                    <i className="fa-solid fa-object-ungroup window design__box--window"></i>
                  </a>

                  <legend className="design__box--title">Diseña</legend>
                </div>

                <i className="fieldset__arrow fa-solid fa-chevron-down design__box--arrow"></i>
              </section>

              <section className="fieldset__container colour-section">
                <h3 className="colours-title">colores</h3>

                <section className="palette-section">
                  <div className="form-inputs input__label">
                    <input
                      name="palette"
                      id="palette-1"
                      type="radio"
                      className="inputs "
                      value="1"
                      checked={dataCard.palette === '1'}
                      onChange={handleInput}
                    />
                    <label htmlFor="colors"></label>
                    <input
                      name="palette"
                      id="palette-2"
                      type="radio"
                      className="inputs "
                      value="2"
                      checked={dataCard.palette === '2'}
                      onChange={handleInput}
                    />
                    <label htmlFor="colors"></label>

                    <input
                      name="palette"
                      id="palette-3"
                      type="radio"
                      className="inputs "
                      value="3"
                      checked={dataCard.palette === '3'}
                      onChange={handleInput}
                    />
                    <label htmlFor="colors"></label>
                  </div>

                  <section className="colours-list">
                    <ul className="list-1">
                      <li className="colour-1a "></li>
                      <li className="colour-1b "></li>
                      <li className="colour-1c "></li>
                    </ul>

                    <ul className="list-3">
                      <li className="colour-2a "></li>
                      <li className="colour-2b "></li>
                      <li className="colour-2c "></li>
                    </ul>

                    <ul className="list-3">
                      <li className="colour-3a "></li>
                      <li className="colour-3b "></li>
                      <li className="colour-3c"></li>
                    </ul>
                  </section>
                </section>
              </section>
            </fieldset>

            <fieldset className="fieldset   fill__fieldset">
              <div className="fill__title ">
                <i className="fa-solid fa-keyboard fill__keyboard"></i>
                <p className="fill__legend">Rellena</p>
                <i className="fieldset__arrow fa-solid fa-chevron-down fill__arrow"></i>
              </div>

              <div className="fieldset__container fill__container">
                <label className="form__label" htmlFor="name">
                  Nombre completo
                </label>
                <input
                  className="form__field "
                  type="text"
                  id="name"
                  name="name"
                  maxLength="20"
                  placeholder="Ej: Sally Jill"
                  onChange={handleInput}
                  value={dataCard.name}
                />
                <label className="form__label" htmlFor="job">
                  Puesto
                </label>
                <input
                  className="form__field"
                  type="text"
                  id="job"
                  name="job"
                  maxLength="24"
                  placeholder="Ej: Front-end unicorn"
                  onChange={handleInput}
                  value={dataCard.job}
                />

                <label className="form__label form__img" htmlFor="img">
                  {' '}
                  Imagen de perfil{' '}
                </label>

                <span className="span__row">
                  <label htmlFor="file-upload" className="subir ">
                    Añadir imagen
                  </label>
                  <input
                    className=""
                    type="file"
                    name="image"
                    id="file-upload"
                    style={{ display: 'none' }}
                  />
                  <div className="form__box "></div>
                </span>

                <label className="form__label " htmlFor="email" required>
                  Email
                </label>
                <input
                  className="form__field"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ej: sally-hill@gmail.com"
                  onChange={handleInput}
                  value={dataCard.email}
                />
                <label className="form__label" htmlFor="telephone" required>
                  Teléfono
                </label>
                <input
                  className="form__field"
                  type="“tel”"
                  id="phone"
                  name="phone"
                  placeholder="Ej: 55-555-55"
                  onChange={handleInput}
                  value={dataCard.phone}
                />
                <label className="form__label" htmlFor="text">
                  Linkedin
                </label>
                <input
                  className="form__field"
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  placeholder="Ej: linkedin.con/in/sally.hill"
                  onChange={handleInput}
                  value={dataCard.linkedin}
                />
                <label className="form__label" htmlFor="text">
                  Github
                </label>
                <input
                  className="form__field"
                  type="text"
                  id="github"
                  name="github"
                  placeholder="Ej: @sally-hill"
                  onChange={handleInput}
                  value={dataCard.github}
                />
              </div>
            </fieldset>

            <fieldset className="fieldset   share__fieldset">
              <div className="share__title1 ">
                <a href="http://">
                  <i className="fa-solid fa-share-nodes share__share"></i>
                </a>
                <p className="share__legend">Comparte</p>
                <i className="fieldset__arrow fa-solid fa-chevron-down share__arrow"></i>
              </div>

              <div className="fieldset__container share__containerposition">
                <div className="share__container ">
                  <i className="fa-solid fa-address-card fa-lg container__icon"></i>
                  <button
                    className="container__button"
                    onClick={handleClickCreateCard}
                  >
                    Crear tarjeta
                  </button>
                </div>
                <article className="share__article  ">
                  <h2 className="share__title ">La tarjeta ha sido creada:</h2>
                  <a
                    className=" share__link"
                    href={apiData.cardURL}
                    target="blank"
                  >
                    {apiData.cardURL}
                  </a>

                  <div className="share__twitter">
                    <i className="fa-brands fa-twitter"></i>
                    <button className="share__button " disabled>
                      Compartir en twitter
                    </button>
                  </div>
                </article>
              </div>
            </fieldset>
          </form>
        </section>
      </section>

      <footer className="footer">
        <p className="footer__text">Awesome profile-cards ©2022</p>
        <img className="footer__img" src={bottomFavicon} alt="" />
      </footer>
    </>
  );
}

export default App;
