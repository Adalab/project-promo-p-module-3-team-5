function Fill(props) {
  return (
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
          onChange={props.handleInput}
          value={props.dataCard.name}
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
          onChange={props.handleInput}
          value={props.dataCard.job}
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
          onChange={props.handleInput}
          value={props.dataCard.email}
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
          onChange={props.handleInput}
          value={props.dataCard.phone}
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
          onChange={props.handleInput}
          value={props.dataCard.linkedin}
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
          onChange={props.handleInput}
          value={props.dataCard.github}
        />
      </div>
    </fieldset>
  );
}
export default Fill;
