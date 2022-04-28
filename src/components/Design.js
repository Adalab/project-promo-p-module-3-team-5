function Design(props) {
  const handleInput = (ev) => {
    props.handleInput({});
  };
  return (
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
              checked={props.dataCard.palette === '1'}
              onChange={props.handleInput}
            />
            <label htmlFor="colors"></label>
            <input
              name="palette"
              id="palette-2"
              type="radio"
              className="inputs "
              value="2"
              checked={props.dataCard.palette === '2'}
              onChange={props.handleInput}
            />
            <label htmlFor="colors"></label>

            <input
              name="palette"
              id="palette-3"
              type="radio"
              className="inputs "
              value="3"
              checked={props.dataCard.palette === '3'}
              onChange={props.handleInput}
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
  );
}

export default Design;
