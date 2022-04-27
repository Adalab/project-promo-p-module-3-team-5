function CardPreview(props) {
  return (
    <section className="preview-section">
      <div className="preview-box">
        <section className="preview-box__container js__reset">
          <i className="fa-solid fa-trash-can preview-box__container--img"></i>
          <button
            className="preview-box__container--button"
            // onClick={handleResetBtn}
          >
            reset
          </button>
        </section>

        <section className="preview-box__containerphoto">
          <section
            className={`containercard palette${props.data.palette} js-palette`}
          >
            <article className="containercard__box">
              <div className="rectangle outline"></div>
              <div className="container-tex">
                <h2 className="container-tex__title js__card__name name">
                  {props.data.name || 'Nombre Apellidos'}
                </h2>
                <p className="container-tex__paragraph js__card__job">
                  {props.data.job || 'Front-end developer'}
                </p>
              </div>
            </article>
            <div className="preview-box__containerphoto--img js__profile-image"></div>
            <ul className="preview-list">
              <li className="preview-list__item icon">
                <a
                  className="preview-list__item--link"
                  href={`tel:${props.data.phone}`}
                >
                  <i className="fa-solid fa-mobile-screen-button link"></i>
                </a>
              </li>
              <li className="preview-list__item icon">
                <a
                  className="preview-list__item--link"
                  href={`mailto:${props.data.email}`}
                >
                  <i className="fa-regular fa-envelope link"></i>
                </a>
              </li>
              <li className="preview-list__item icon">
                <a
                  className="preview-list__item--link"
                  target="blank"
                  href={`${props.data.linkedin}`}
                >
                  <i className="fa-brands fa-linkedin-in link"></i>
                </a>
              </li>
              <li className="preview-list__item icon">
                <a
                  className="preview-list__item--link"
                  target="blank"
                  href={`${props.data.github}`}
                >
                  <i className="fa-brands fa-github-alt link"></i>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </section>
  );
}

export default CardPreview;
