import '../styles/main.scss';
import { useState } from 'react';

function App() {
  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: '',
  });

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;
    setDataCard({
      ...dataCard,
      [inputChanged]: inputValue,
    });
    // console.log(dataCard);
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
      photo: '',
    });
  };

  return (
    <>
      <header className="header">
        <img
          className="header__img"
          src="./assets/images/boolean logo.png"
          alt="Logo imagenes"
          title="Logo imagenes"
        />
      </header>

      <section className="box-preview">
        <section className="preview-section">
          <div className="preview-box">
            <section className="preview-box__container js__reset">
              <i className="fa-solid fa-trash-can preview-box__container--img"></i>
              <button
                className="preview-box__container--button"
                onClick={handleResetBtn}
              >
                reset
              </button>
            </section>

            <section className="preview-box__containerphoto">
              <section
                className={`containercard palette${dataCard.palette} js-palette`}
              >
                <article className="containercard__box">
                  <div className="rectangle outline"></div>
                  <div className="container-tex">
                    <h2 className="container-tex__title js__card__name name">
                      {dataCard.name || 'Nombre Apellidos'}
                    </h2>
                    <p className="container-tex__paragraph js__card__job">
                      {dataCard.job || 'Front-end developer'}
                    </p>
                  </div>
                </article>
                <div className="preview-box__containerphoto--img js__profile-image"></div>
                <ul className="preview-list">
                  <li className="preview-list__item icon">
                    <a
                      className="preview-list__item--link"
                      href={`tel:${dataCard.phone}`}
                    >
                      <i className="fa-solid fa-mobile-screen-button link"></i>
                    </a>
                  </li>
                  <li className="preview-list__item icon">
                    <a
                      className="preview-list__item--link"
                      href={`mailto:${dataCard.email}`}
                    >
                      <i className="fa-regular fa-envelope link"></i>
                    </a>
                  </li>
                  <li className="preview-list__item icon">
                    <a
                      className="preview-list__item--link"
                      target="blank"
                      href={`${dataCard.linkedin}`}
                    >
                      <i className="fa-brands fa-linkedin-in link"></i>
                    </a>
                  </li>
                  <li className="preview-list__item icon">
                    <a
                      className="preview-list__item--link"
                      target="blank"
                      href={`${dataCard.github}`}
                    >
                      <i className="fa-brands fa-github-alt link"></i>
                    </a>
                  </li>
                </ul>
              </section>
            </section>
          </div>
        </section>

        <section className="section-form">
          <form action="" className="js_form">
            <fieldset className="fieldset js-form-fieldset fieldset-colours">
              <section className="design js-form-title">
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
                      className="inputs js-inputColor1"
                      value="1"
                      checked={dataCard.palette === '1'}
                      onChange={handleInput}
                    />
                    <label htmlFor="colors"></label>
                    <input
                      name="palette"
                      id="palette-2"
                      type="radio"
                      className="inputs js-inputColor2"
                      value="2"
                      checked={dataCard.palette === '2'}
                      onChange={handleInput}
                    />
                    <label htmlFor="colors"></label>

                    <input
                      name="palette"
                      id="palette-3"
                      type="radio"
                      className="inputs js-inputColor3"
                      value="3"
                      checked={dataCard.palette === '3'}
                      onChange={handleInput}
                    />
                    <label htmlFor="colors"></label>
                  </div>

                  <section className="colours-list">
                    <ul className="list-1">
                      <li className="colour-1a js-color-1a"></li>
                      <li className="colour-1b js-color-1b"></li>
                      <li className="colour-1c js-color-1c"></li>
                    </ul>

                    <ul className="list-3">
                      <li className="colour-2a js-color-2a"></li>
                      <li className="colour-2b js-color-2b"></li>
                      <li className="colour-2c js-color-2c"></li>
                    </ul>

                    <ul className="list-3">
                      <li className="colour-3a js-color-3a"></li>
                      <li className="colour-3b js-color-3b"></li>
                      <li className="colour-3c js-color-3c"></li>
                    </ul>
                  </section>
                </section>
              </section>
            </fieldset>

            <fieldset className="fieldset  js-form-fieldset fill__fieldset">
              <div className="fill__title js-form-title">
                <i className="fa-solid fa-keyboard fill__keyboard"></i>
                <p className="fill__legend">Rellena</p>
                <i className="fieldset__arrow fa-solid fa-chevron-down fill__arrow"></i>
              </div>

              <div className="fieldset__container fill__container">
                <label className="form__label" htmlFor="name">
                  Nombre completo
                </label>
                <input
                  className="form__field js__fillIn__name"
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
                  className="form__field js__fillIn__job"
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
                  <label
                    htmlFor="file-upload"
                    className="subir js__profile-trigger"
                  >
                    Añadir imagen
                  </label>
                  <input
                    className="js__profile-upload-btn"
                    type="file"
                    name="image"
                    id="file-upload"
                    style={{ display: 'none' }}
                  />
                  <div className="form__box js__profile-preview"></div>
                </span>

                <label
                  className="form__label js_email"
                  htmlFor="email"
                  required
                >
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

            <fieldset className="fieldset  js-form-fieldset share__fieldset">
              <div className="share__title1 js-form-title">
                <a href="http://">
                  <i className="fa-solid fa-share-nodes share__share"></i>
                </a>
                <p className="share__legend">Comparte</p>
                <i className="fieldset__arrow fa-solid fa-chevron-down share__arrow"></i>
              </div>

              <div className="fieldset__container share__containerposition">
                <div className="share__container js-share-container">
                  <i className="fa-solid fa-address-card fa-lg container__icon"></i>
                  <button className="container__button">Crear tarjeta</button>
                </div>
                <article className="share__article js-share-article hidden">
                  <h2 className="share__title js_message_error">
                    La tarjeta ha sido creada:
                  </h2>
                  <a className="js_URL share__link" href=""></a>
                  <div className="share__twitter">
                    <i className="fa-brands fa-twitter"></i>
                    <button
                      className="share__button js_twitterShareBtn"
                      disabled
                    >
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
        <img
          className="footer__img"
          src="./assets/images/favicon-32x32.png"
          alt=""
        />
      </footer>
    </>
  );
}

export default App;
