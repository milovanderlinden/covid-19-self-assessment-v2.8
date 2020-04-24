import React from "react"
import "../stylesheets/footer.css"

const Footer = ({ lang }) => (
  <footer>
    <div className="ontario-grid-container">
      <div className="ontario-row ontario-row--collapse">
        <div className="ontario-small-12 ontario-columns">
          <ul className="ontario-footer__list ontario-list--inline">
            {lang === "fr" ? (
              <>
                <li>
                  <a href="https://www.ontario.ca/fr/page/lontario-en-bref">l'Ontario en bref</a>
                </li>
                <li>
                  <a href="https://www.ontario.ca/fr/page/accessibilite">accessibilité</a>
                </li>
                <li>
                  <a href="https://news.ontario.ca/newsroom/fr">nouvelles</a>
                </li>
                <li>
                  <a href="https://www.ontario.ca/fr/page/declaration-concernant-la-protection-de-la-vie-privee">
                    confidentialité
                  </a>
                </li>
                <li>
                  <a href="https://www.ontario.ca/fr/page/conditions-dutilisation">conditions d’utilisation</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="https://www.ontario.ca/page/about-ontario">about Ontario</a>
                </li>
                <li>
                  <a href="https://www.ontario.ca/page/accessibility">accessibility</a>
                </li>
                <li>
                  <a href="http://news.ontario.ca/newsroom/en">news</a>
                </li>
                <li>
                  <a href="https://www.ontario.ca/page/privacy-statement">privacy</a>
                </li>
                <li>
                  <a href="https://www.ontario.ca/page/terms-use">terms of use</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="ontario-row ontario-row--collapse">
        <div className="ontario-small-12 ontario-columns">
          <p className="ontario-footer__copyright">
            <small>
              <a href="https://www.ontario.ca/page/copyright-information-c-queens-printer-ontario">
                © Queen’s Printer for Ontario, 2012–20
              </a>
            </small>
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
