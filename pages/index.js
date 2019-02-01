import './main.scss';

export default () => (
  <main>
    <header className="bg--light-blue">
      <img src="/static/Syson-800.png" className="logo" />
    </header>
    <section>
      <div className="top-boxed-background" />
      <div className="section-content fancy-box">
        <img src="/static/brand-fancy.png" className="fancy" />
      </div>
    </section>
    <section>
      <div className="section-content">
        <h2 className="text-box--left">Frihet, Schysst Lön & Bra Häng 🐸</h2>
        <p className="text-box--right">
          Hos oss kan du fokusera på det du tycker om. Jobba på roliga projekt
          hos bra kunder. Umgås avslappnat och resa till nya platser. Säljarbete
          och administration kan du lägga åt sidan.
        </p>
        <p className="text-box--right">
          Du som söker dig till Syson drivs mer av att lära dig nya saker och
          träffa nya människor än att klättra i en karriärstege.
        </p>
        <div className="boxed-background" />
      </div>
    </section>
    <section>
      <div className="section-content">
        <h2 className="header--green">En schysst deal 🤝</h2>
        <p>
          Vår lönemodell är simpel: du får 70% av timpriset när du har ett
          uppdrag, annars är du garanterad 26 000 kr. Vi räknar med att du tar
          minst sex veckors semester, men du har friheten att ta mer om du vill.
        </p>
        <div>LÖNESNURRA</div>
        <p>
          Vill du ha en tjänstebil, spara mer pengar till pensionen eller något
          annat så hjälper vi dig med det. Alla har samma deal, nyanställd som
          veteran.
        </p>
        <p>
          Kalkylen ovan inkluderar 6 veckors semester, 2600 i extra pension och
          10 dagar utan uppdrag. Timpriserna vi tar varierar idag mellan ca 700
          - 1300 kr.
        </p>
      </div>
    </section>
    <section>
      <div className="section-content cards">
        <div className="cards__card bg--green">
          <div className="card-emoji">👩🏻‍💻</div>
          <h2>The Syson Way</h2>
          <a href="#">Räkna på din lön</a>
        </div>
        <div className="cards__card bg--light-red">
          <div className="card-emoji">🏝️</div>
          <h2>Såhär funkar semestern</h2>
          <a href="#">Läs mer om semesterdagar</a>
        </div>
        <div className="cards__card bg--yellow">
          <div className="card-emoji">🏆</div>
          <h2>Det är OK att skryta ibland</h2>
          <a href="#">Vi fick lite erkännande</a>
        </div>
      </div>
    </section>
    <section className="bg--dark-blue">
      <div className="section-content">
        <h2 className="header--green">Några av våra kunder</h2>
        <img />
        <img />
        <img />
        <img />
      </div>
    </section>
    <section className="bg--light-red">
      <div className="section-content">
        <h2>DJ's, Föräldrar och Hårdrockare</h2>
        <div className="consultants">
          <div className="consultant">
            <img src="/static/love.jpg" className="headshot" />
            <h3 className="name">Love Gehlin</h3>
            <p className="description">Gillar pizza. Det är gott!</p>
            <a href="#" className="profile-link">
              Profil
            </a>
          </div>
          <div className="consultant">
            <img src="/static/love.jpg" className="headshot" />
            <h3 className="name">Love Gehlin</h3>
            <p className="description">Gillar pizza. Det är gott!</p>
            <a href="#" className="profile-link">
              Profil
            </a>
          </div>
          <div className="consultant">
            <img src="/static/love.jpg" className="headshot" />
            <h3 className="name">Love Gehlin</h3>
            <p className="description">Gillar pizza. Det är gott!</p>
            <a href="#" className="profile-link">
              Profil
            </a>
          </div>
          <div className="consultant">
            <img src="/static/love.jpg" className="headshot" />
            <h3 className="name">Love Gehlin</h3>
            <p className="description">Gillar pizza. Det är gott!</p>
            <a href="#" className="profile-link">
              Profil
            </a>
          </div>
        </div>
        <div className="center">
          <button className="view-more-button">Se flera människor</button>
        </div>
      </div>
    </section>
    <section>
      <div className="section-content">
        <h2 className="header--green">Hur är konsultlivet?</h2>
        <div>
          <p>
            Som konsult på Syson hjälper du företag att fixa appar, hemsidor och
            systemen under huven. Du jobbar på kundens kontor, oftast i centrala
            Stockholm och är en i gänget i det team du jobbar i. Uppdragen varar
            oftast mellan 1 till 2 år.
          </p>
          <p>
            Du blir regelbundet utmanad och får testa på nya tekniker. Du får
            lära känna människor och sätta dig in i olika system. När ett
            uppdrag tar slut och ett nytt tar vid så blir det mycket nytt, men
            samtidigt har du kvar din stabila bas i vännerna på Syson - som du
            träffar ofta. Luncher, konferenser, kvällsaktiviteter och massa
            annat. Så ofta som du känner för det.
          </p>
        </div>
        <aside>Gubbebild</aside>
      </div>
    </section>
    <section className="placeholder">
      <div className="section-content__instagram">
        <h2 className="instagram-headline">Instagram@syson.se</h2>
      </div>
      <div>Bild Bild bild</div>
      <div>Bild Bild bild</div>
      <div>Bild Bild bild</div>
      <div>Bild Bild bild</div>
      <div>Bild Bild bild</div>
      <div>Bild Bild bild</div>
      <div>Bild Bild bild</div>
      <div>Bild Bild bild</div>
      <div>Bild Bild bild</div>
    </section>
    <footer>
      <div className="section-content footer">
        <div>
          <p>+46 73 334 79 99</p>
          <p>hej@syson.se</p>
        </div>
        <div>
          <p>Rekordvägen 12</p>
          <p>134 39 Gustavsberg</p>
        </div>
        <div>
          <p>Syson AB</p>
          <p>Orgnr: 556934-1851</p>
        </div>
      </div>
    </footer>
  </main>
);
