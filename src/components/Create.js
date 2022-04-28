import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Header from './Header';
import Footer from './Footer';

function Create(props) {
  return (
    <>
      <Header />

      <section className="box-preview">
        <CardPreview dataCard={props.dataCard} />

        <section className="section-form">
          <form action="" className="">
            <Design dataCard={props.dataCard} handleInput={props.handleInput} />
            <Fill dataCard={props.dataCard} handleInput={props.handleInput} />
            <Share
              dataCard={props.dataCard}
              handleClickCreateCard={props.handleClickCreateCard}
              apiData={props.apiData}
            />

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

      <Footer />
    </>
  );
}

export default Create;
