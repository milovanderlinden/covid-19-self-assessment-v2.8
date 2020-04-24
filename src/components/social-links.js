import React from "react"

const links = {
  en: {
    facebook:
      "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcovid-19.ontario.ca%2Fself-assessment&amp;src=sdkpreparse",
    twitter:
      "https://twitter.com/intent/tweet?text=Ontario%20COVID-19%20Self-Assessment%20Tool%3A%20https%3A//covid-19.ontario.ca/self-assessment",
    linkedin:
      "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//covid-19.ontario.ca/self-assessment&title=&summary=&source=",
    email: "mailto:?subject=COVID-19%20Self%20Assessment&body=https%3A//covid-19.ontario.ca/self-assessment",
  },
  fr: {
    facebook:
      "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcovid-19.ontario.ca%2Fautoevaluation&amp;src=sdkpreparse",
    twitter:
      "https://twitter.com/intent/tweet?text=Ontario%20COVID-19%20autoevaluation%20Tool%3A%20https%3A//covid-19.ontario.ca/autoevaluation",
    linkedin:
      "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//covid-19.ontario.ca/autoevaluation&title=&summary=&source=",
    email: "mailto:?subject=COVID-19%20autoevaluation&body=https%3A//covid-19.ontario.ca/autoevaluation",
  },
}

const title = {
  en: "Share self-assessment tool",
  fr: "Partager l’outil autoévaluation",
}

const SocialLinks = ({ lang }) => {
  const language = lang === "fr" ? "fr" : "en"

  const ShareLink = ({ share }) => (
    <a target="_blank" rel="noopener noreferrer" href={links[language][share]}>
      <span className="ontario-show-for-sr">{share}</span>
      <i className={`ontario-icon ontario-icon__${share}`}></i>
    </a>
  )

  return (
    <div className="ontario-row ontario-margin--bottom-double-half ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <h2 className="ontario-H2">{title[lang]}</h2>
        <ul className="ontario-list--inline">
          <li>
            <ShareLink share="linkedin" />
          </li>
          <li>
            <ShareLink share="twitter" />
          </li>
          <li>
            <ShareLink share="facebook" />
          </li>
          <li>
            <ShareLink share="email" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SocialLinks
