import React, { useContext } from "react"

import { GlobalStateContext } from "../context/global-context-provider"
import { shared } from "../shared"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import YesNoButtons from "../components/yes-no-buttons"

const QuestionTemplate = ({ lang, yesLink, noLink, children }) => {
  const state = useContext(GlobalStateContext)

  return (
    <Layout lang={lang}>
      <SEO lang={lang} />
      <Question
        lang={lang}
        title={shared[lang].title}
        buttons={
          <YesNoButtons
            lang={lang}
            yesLink={`${shared[lang].basePath}${yesLink(state)}`}
            noLink={`${shared[lang].basePath}${noLink(state)}`}
          />
        }
      >
        {children}
      </Question>
    </Layout>
  )
}

export default QuestionTemplate
