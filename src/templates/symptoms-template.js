import React, { useContext } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import ContinueButton from "../components/continue-button"
import { GlobalStateContext } from "../context/global-context-provider"
import Checkbox from "../components/checkbox"
import { shared, symptomsTitle, symptoms, logic } from "../shared"

const SymptomsTemplate = ({ lang }) => {
  const state = useContext(GlobalStateContext)

  return (
    <Layout lang={lang}>
      <SEO lang={lang} />
      <Question
        lang={lang}
        title={shared[lang].title}
        buttons={<ContinueButton lang={lang} linkTo={`${shared[lang].basePath}${logic.q2.cont(state)}`} />}
      >
        <div className="ontario-form-group">
          <fieldset className="ontario-fieldset">
            <legend>{symptomsTitle[lang]}</legend>
            <div className="ontario-question__options">
              <div className="ontario-checkboxes">
                {Object.keys(symptoms).map(id => (
                  <Checkbox
                    key={id}
                    id={id}
                    value={symptoms[id].value}
                    text={symptoms[id][lang].text}
                    supplementaryText={symptoms[id][lang].sup_text || ""}
                  />
                ))}
              </div>
            </div>
          </fieldset>
        </div>
      </Question>
    </Layout>
  )
}

export default SymptomsTemplate
