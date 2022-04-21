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
    console.log(dataCard);
  };

  return (
    <>
      <header className='header'>
        <img
          className='header__img'
          src='./assets/images/tarjetas-molonas.png'
          alt='Logo imagenes'
          title='Logo imagenes'
        />
      </header>

      <section className='box-preview'>
        <section className='preview-section'>
          <div className='preview-box'>
            <section className='preview-box__container'>
              <i className='fa-solid fa-trash-can preview-box__container--img'></i>
              <button className='preview-box__container--button'>reset</button>
            </section>
            <section className='preview-box__containerphoto'>
              <section className='containercard'>
                <article className='containercard__box'>
                  <div className='js-rectangle rectangle grey'></div>
                  <div className='container-tex'>
                    <h2 className='container-tex__title js__card__name color'>
                      {dataCard.name || 'Nombre Apellidos'}
                    </h2>
                    <p className='container-tex__paragraph js__card__job color'>
                      {dataCard.job || 'Front-end developer'}
                    </p>
                  </div>
                </article>
                <div className='preview-box__containerphoto--img'></div>
                <ul className='preview-list'>
                  <li className='preview-list__item js-preview-list border'>
                    <a
                      className='preview-list__item--link'
                      href={`tel:${dataCard.phone}`}
                    >
                      <i className='fa-solid fa-mobile-screen-button color js-icons'></i>
                    </a>
                  </li>
                  <li className='preview-list__item js-preview-list border'>
                    <a
                      className='preview-list__item--link'
                      href={`mailto:${dataCard.email}`}
                    >
                      <i className='fa-regular fa-envelope color js-icons'></i>
                    </a>
                  </li>
                  <li className='preview-list__item js-preview-list border'>
                    <a
                      className='preview-list__item--link'
                      target='_blank'
                      href={`${dataCard.linkedin}`}
                    >
                      <i className='fa-brands fa-linkedin-in color js-icons'></i>
                    </a>
                  </li>
                  <li className='preview-list__item js-preview-list border'>
                    <a
                      className='preview-list__item--link'
                      target='_blank'
                      href={`${dataCard.github}`}
                    >
                      <i className='fa-brands fa-github-alt color js-icons'></i>
                    </a>
                  </li>
                </ul>
              </section>
            </section>
          </div>
        </section>

        <section className='section-form'>
          <form action=''>
            <fieldset className='fieldset js-form-fieldset fieldset-colours'>
              <section className='design js-form-title'>
                <div className='design__box'>
                  {/* <!--className="window-title"--> */}
                  <a href='http://'>
                    <i className='fa-solid fa-object-ungroup window design__box--window'></i>
                  </a>

                  <legend className='design__box--title'>Diseña</legend>
                  {/* <!--className="design-title"--> */}
                </div>

                <i className='fieldset__arrow fa-solid fa-chevron-down design__box--arrow'></i>
              </section>

              <section className='fieldset__container colour-section'>
                <h3 className='colours-title'>colores</h3>

                <section className='palette-section'>
                  <div className='form-inputs input__label'>
                    <input
                      name='input'
                      type='radio'
                      className='inputs js-inputColor1'
                    />
                    <label htmlFor='colors'></label>
                    <input
                      name='input'
                      type='radio'
                      className='inputs js-inputColor2'
                    />
                    <label htmlFor='colors'></label>

                    <input
                      name='input'
                      type='radio'
                      className='inputs js-inputColor3'
                    />
                    <label htmlFor='colors'></label>
                  </div>

                  <section className='colours-list'>
                    <ul className='list-1'>
                      <li className='colour-1a js-color-1a'></li>
                      <li className='colour-1b js-color-1b'></li>
                      <li className='colour-1c js-color-1c'></li>
                    </ul>

                    <ul className='list-3'>
                      <li className='colour-2a js-color-2a'></li>
                      <li className='colour-2b js-color-2b'></li>
                      <li className='colour-2c js-color-2c'></li>
                    </ul>

                    <ul className='list-3'>
                      <li className='colour-3a js-color-3a'></li>
                      <li className='colour-3b js-color-3b'></li>
                      <li className='colour-3c js-color-3c'></li>
                    </ul>
                  </section>
                </section>
              </section>
            </fieldset>

            <fieldset className='fieldset js-form-fieldset fill__fieldset'>
              <div className='fill__title js-form-title'>
                <i className='fa-solid fa-keyboard fill__keyboard'></i>
                <p className='fill__legend'>Rellena</p>
                <i className='fieldset__arrow fa-solid fa-chevron-down fill__arrow'></i>
              </div>

              <div className='fieldset__container fill__container'>
                <label className='form__label' htmlFor='name'>
                  Nombre completo
                </label>
                <input
                  className='form__field js__fillIn__name'
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Ej: Sally Jill'
                  onChange={handleInput}
                  value={dataCard.name}
                />
                <label className='form__label' htmlFor='job'>
                  Puesto
                </label>
                <input
                  className='form__field js__fillIn__job'
                  type='text'
                  id='job'
                  name='job'
                  placeholder='Ej: Front-end unicorn'
                  onChange={handleInput}
                  value={dataCard.job}
                />

                <label className='form__label form__img' htmlFor='img'>
                  {' '}
                  Imagen de perfil{' '}
                </label>

                <span className='span__row'>
                  <label htmlFor='file-upload' className='subir'>
                    Añadir imagen
                  </label>
                  <input
                    type='file'
                    name=''
                    id='file-upload'
                    style={{ display: 'none' }}
                  />

                  <div className='form__box'></div>
                </span>

                <label className='form__label' htmlFor='email'>
                  Email
                </label>
                <input
                  className='form__field'
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Ej: sally-hill@gmail.com'
                  onChange={handleInput}
                  value={dataCard.email}
                />
                <label className='form__label' htmlFor='“phone”'>
                  Teléfono
                </label>
                <input
                  className='form__field'
                  type='“tel”'
                  id='phone'
                  name='phone'
                  placeholder='Ej: 55-555-55'
                  onChange={handleInput}
                  value={dataCard.phone}
                />
                <label className='form__label' htmlFor='text'>
                  Linkedin
                </label>
                <input
                  className='form__field'
                  type='text'
                  id='linkedin'
                  name='linkedin'
                  placeholder='Ej: linkedin.con/in/sally.hill'
                  onChange={handleInput}
                  value={dataCard.linkedin}
                />
                <label className='form__label' htmlFor='text'>
                  Github
                </label>
                <input
                  className='form__field'
                  type='text'
                  id='github'
                  name='github'
                  placeholder='Ej: @sally-hill'
                  onChange={handleInput}
                  value={dataCard.github}
                />
              </div>
            </fieldset>

            <fieldset className='fieldset js-form-fieldset share__fieldset'>
              <div className='share__title1 js-form-title'>
                <a href='http://'>
                  <i className='fa-solid fa-share-nodes share__share'></i>
                </a>
                <p className='share__legend'>Comparte</p>
                <i className='fieldset__arrow fa-solid fa-chevron-down share__arrow'></i>
              </div>

              <div className='fieldset__container share__containerposition'>
                <div className='share__container js-share-container'>
                  <i className='fa-solid fa-address-card fa-lg container__icon'></i>
                  <button className='container__button'>Crear tarjeta</button>
                </div>
                <article className='share__article js-share-article hidden'>
                  <h2 className='share__title'>La tarjeta ha sido creada:</h2>
                  <a
                    className='share__link'
                    href='https://awesome-profile-card.com?id=A456DF0001'
                  >
                    https://awesome-profile-card.com?id=A456DF0001
                  </a>
                  <div className='share__twitter'>
                    <i className='fa-brands fa-twitter'></i>
                    <button className='share__button'>
                      Compartir en twitter
                    </button>
                  </div>
                </article>
              </div>
            </fieldset>
          </form>
        </section>
      </section>

      <footer className='footer'>
        <p className='footer__text'>Awesome profile-cards ©2022</p>
        <img
          className='footer__img'
          src='./assets/images/logo-adalab.png'
          alt=''
        />
      </footer>
    </>
  );
}

export default App;
