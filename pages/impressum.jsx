import React from 'react'
import Navbar from '../components/Navbar'

export default function Impressum() {

  const year = new Date().getFullYear()

  return (
    <section id="site_notice" className="h-full bg-black overflow-scroll">
      <Navbar />
      <div className='sm:px-40 px-10 text-sm sm:text-base mt-12 sm:mt-24 h-fit'>
        <h1 className="text-2xl font-semibold">Impressum</h1>
        <br />
        <p>Angaben gemäß § 5 TMG</p>
        <br />
        <p>Max Muster<br />
          Musterweg<br />
          12345 Musterstadt <br />
        </p>
        <br />
        <p> <strong>Vertreten durch: </strong><br />
          Max Muster<br />
          <br />
        </p><p><strong>Kontakt:</strong> <br />
          Telefon: 01234-789456<br />
          Fax: 1234-56789<br />
          E-Mail: <a href='mailto:max@muster.de'>max@muster.de</a><br />
        </p>
        <br />
        <p><strong>Registereintrag: </strong><br />
          Eintragung im Registergericht: Musterstadt<br />
          Registernummer: 12345<br /></p>
        <br />
        <p><strong>Umsatzsteuer-ID: </strong> <br />
          Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: Musterustid.<br />
          <br />
          <strong>Wirtschafts-ID: </strong><br />
          Musterwirtschaftsid<br />
        </p>
        <br />
        <p><strong>Aufsichtsbehörde:</strong><br />
          Musteraufsicht Musterstadt<br />
        </p>
        <br />
        <p><strong>Haftungsausschluss: </strong><br />
          <br /><strong>Haftung für Inhalte</strong><br />
          <br />
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br /><br /><strong>Urheberrecht</strong><br /><br />
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.<br /><br /><strong>Datenschutz</strong><br /><br />
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br />
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br />
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br />
        </p>
        <br />
      </div>
      <div className="text-center pb-5">
        <p className="text-xs sm:text-sm" translate="no"><span className="text-xl sm:text-2xl">©</span> {year} Cabrito Art Marketing. All rights reserved. </p>
      </div>
    </section>
  )
}
