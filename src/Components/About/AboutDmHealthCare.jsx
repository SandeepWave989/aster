import styles from "./About.module.css";

const AboutDmHealthCare = () => {
  return (<>
    <div className="container">
      <div className="row">
        <div className="col-lg-11 mx-auto text-justify">
        <h3 className={`${styles.titleBorder} ${styles.secTitle}`}>
          ABOUT ASTER DM HEALTHCARE
        </h3>

        <div className={`col-xs-12 col-sm-12 col-md-12 about-block text-justify ${styles.texJustified}`}>
          <p className={`${styles.para}`}>
            From a single clinic&nbsp;to a performance-driven healthcare
            enterprise spread across 308 establishments in 9 countries and
            growing, Aster DM Healthcare has transitioned into being a growing
            network across the Middle East, India and Far East.
          </p>
          <p className={`${styles.para}`}>
            Currently&nbsp;one of the largest and fastest growing
            conglomerates in the MENA region, Aster DM Healthcare covers the
            full spectrum of healthcare services. An expansive portfolio
            includes hospitals, clinic, Diagnostic centre and retail
            pharmacies.
          </p>
          <p className={`${styles.para}`}>
            Headquartered in Dubai, the Aster DM network now encompasses
            17,594 employees, 2860&nbsp; doctors with several JCI accredited
            Hospitals, clinics and Diagnostic Centres.
          </p>
          <p className={`${styles.para}`}>
            Never content to rest on its laurels, Aster DM Healthcare is
            constantly seeking opportunities to set new yardsticks with
            advanced developments. With many more innovative and ambitious
            initiatives, Aster DM Healthcare has radically catalyzed the
            healthcare revolution across Middle East, India and Far East.
          </p>
          <p className={`${styles.para}`}>
            Each of the Group’s verticals is a symbol of distinction, driven
            by the commitment to build a healthier tomorrow and to take
            healthcare to the next level of excellence.
          </p>
          <div id="Container">
            <div id="Content-Container">
              <div id="Content-Main">
                <div className="table-div">
                  <div id="Content">
                    <article id="skip-to-content" className="textMain">
                      For more information please visit{" "}
                      <a
                        href="http://www.asterdmhealthcare.com/"
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        www.asterdmhealthcare.com
                      </a>
                      .
                    </article>
                    <article></article>
                  </div>
                  <article></article>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.aboutuss} `}>
            <h4 className={`${styles.subTitle}`}>services we provide</h4>
            <p className={`${styles.para}`}>
              Aster Digital Health’s flagship product, myAster, brings Aster’s
              ecosystem, i.e., Clinics, Pharmacies, Hospitals, and Homecare,
              on one platform. The myAster app allows its users to book Aster
              doctor appointments, consult in-person or through video
              consultation, order prescriptions and health and wellness
              products, as well as view and manage health records for
              themselves and their family. One can access all the services of
              the myAster app on myAster website as well. The services are
              currently available in the UAE. To know more visit&nbsp;
              <u>
                <span className="x_1220428884colour">
                  <a
                    href="https://www.myaster.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    myAster website
                  </a>
                </span>
              </u>
              &nbsp;or&nbsp;
              <u>
                <span className="x_1220428884colour">
                  <a
                    href="https://app.adjust.com/96pb8jw"
                    target="_blank"
                    rel="noopener"
                  >
                    download the app
                  </a>
                </span>
              </u>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </>);
};

export default AboutDmHealthCare;
