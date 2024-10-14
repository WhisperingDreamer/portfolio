import Header from "./../components/header/Header.js";

function Home() {
  return (
    <>
      <Header />

      <main>
        <div className="section">
          <div className="container">
            <ul className="content-list">
              <li className="content-list__item">
                <h2 className="title-2">Frontend (Priority)</h2>
                <p>HTML, CSS, JavaScript, NPM, ReactJS, Sass</p>
              </li>
              <li className="content-list__item">
                <h2 className="title-2">Backend (Secondary)</h2>
                <p>Python, Django, PostgreSQL, MySQL, MongoDB</p>
              </li>
              <li className="content-list__item">
                <h2 className="title-2">Other</h2>
                <p>English(B2), GitHub, REST API</p>
              </li>
              <li className="content-list__item">
                <h2 className="title-2">Soft skills</h2>
                <p>Responsible, Self-study, Time management,<br/>
                Obsession with development</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <ul className="content-list">
              <div className="title-3">
                <h3>Professional experience</h3>
              </div>
              <div className="dots" />
              <li className="content-list__item">
                Still no commercial experience but you can fix that ;)
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <ul className="content-list">
              <div className="title-3">
                <h3>Education</h3>
              </div>
              Studying for a bachelor's degree
              <br />
              Russian University of Transport (RUT (MIIT)), Moscow, Russia
              <br />
              September 2023 - June 2027
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
