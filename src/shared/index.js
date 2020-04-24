import { symptomsTitle, symptoms, noSymptomsId } from "./symptoms"
import logic from "./logic"
import addSymptomsToGTMDataLayer from "./analytics"

const shared = {
  en: {
    basePath: "/self-assessment/",
    title: "COVID-19 self-assessment",
    resultsTitle: "COVID-19 self-assessment result",
    backButtonText: "Back to previous page",
    continueButtonText: "Continue",
  },
  fr: {
    basePath: "/autoevaluation/",
    title: "COVID-19 autoevaluation",
    resultsTitle: "Résultat de l’auto-évaluation",
    backButtonText: "Retour à la page précédente",
    continueButtonText: "Continuer",
  },
}

export { shared, symptomsTitle, symptoms, noSymptomsId, logic, addSymptomsToGTMDataLayer }
