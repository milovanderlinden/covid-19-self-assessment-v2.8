import React, { useContext } from "react"
import { navigate } from "@reach/router"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Button from "../../components/button"
import CalloutNoTitle from "../../components/callout-no-title"
import CalloutNoBg from "../../components/callout-no-bg"
import { GlobalDispatchContext } from "../../context/global-context-provider"

const IndexPage = () => {
  const dispatch = useContext(GlobalDispatchContext)

  const handleClick = () => {
    dispatch({ type: "SAT_START" })
    navigate("/zelf-test/q1")
  }

  return (
    <Layout lang="nl">
      <SEO lang="nl" />
      <nav role="navigation">
        <div className="ontario-row">
          <div className="ontario-small-12 ontario-columns">
            <ul className="ontario-breadcrumbs">
              <li>
                <a href="https://www.ontario.ca/page/government-ontario">Home</a>
              </li>
              <li>
                <a href="https://www.ontario.ca/page/health-care-ontario">Gezondheid en welzijn</a>
              </li>
              <li>
                <a href="https://covid-19.ontario.ca/">COVID-19</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>COVID-19 Zelf-test</h1>
      <CalloutNoBg
        message={
          <>
            <p>
              <strong>Versie 2.8</strong>
              <br />
              <strong>Laatst gewijzigd op 4 mei, 2020</strong>
              <br />
              Nederlandse vertaling toegevoegd
            </p>
            <br />
          </>
        }
      />
      <p className="ontario-lead-statement">
        Doe de zelf-test uit als je denkt dat je bent blootgesteld aan COVID-19 (nieuw coronavirus) of als je symptomen hebt. Je zult
         informatie krijgen over wat u vervolgens moet doen.
      </p>
      <p className="ontario-lead-statement">Je kunt ook namens iemand anders de zelf-test doen.</p>
      <CalloutNoTitle
        messagemain="Indien het gaat om een medisch noodgeval, bel dan 112."
        message="Geef aan welke symptomen je hebt en waar je recent bent geweest."
      />
      <p className="ontario-margin-top-32-!">
        This information is not intended to provide medical advice. If you have medical questions, consult a health
        practitioner or your{" "}
        <a href="http://www.health.gov.on.ca/en/common/system/services/phu/locations.aspx">local public health unit</a>.
      </p>
      <div className="ontario-text-center ontario-margin-top-40-! ontario-landing__button">
        <Button text="Zelf-test starten" clickHandler={handleClick} />
      </div>
    </Layout>
  )
}

export default IndexPage
