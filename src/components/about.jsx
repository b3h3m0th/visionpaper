
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Über Uns</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h2>Organigramm</h2>
              <img src="img/organigramm.png" alt="Vision Paper GmbH Organigramm" />
              <h2>Leitbild</h2>
              <p>{props.data ? props.data.mission_statement : "loading..."}</p>
              <h2>Angebot</h2>
              <p>{props.data ? props.data.offer : "loading..."}</p>
              <h3>Warum sollten Sie mit uns arbeiten?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
