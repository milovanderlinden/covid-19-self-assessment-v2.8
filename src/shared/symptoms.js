const symptomsTitle = {
  en: "Are you experiencing any of the following symptoms? Choose any/all that apply.",
  fr: "Présentez-vous l'un des symptômes suivants? Choisissez l’un ou tous les symptômes qui s’appliquent.",
  nl: "Are you experiencing any of the following symptoms? Choose any/all that apply.",
}

const symptoms = {
  fever: {
    en: {
      text: "fever",
      sup_text: "(feeling hot to the touch, a temperature of 37.8 degrees Celsius or higher)",
    },
    fr: {
      text: "fièvre",
      sup_text: "(sensation de chaleur au toucher, température de 37,8 degrés Celsius ou plus)",
    },
    nl: {
      text: "fever",
      sup_text: "(feeling hot to the touch, a temperature of 37.8 degrees Celsius or higher)",
    },
    value: "1",
  },
  chills: { en: { text: "chills" }, fr: { text: "frissons" }, en: { text: "nl" }, value: "0.5" },
  cough_new: {
    en: { text: "cough that's new or worsening", sup_text: "(continuous, more than usual)" },
    fr: { text: "toux nouvelle ou qui s'aggrave", sup_text: "(continue, plus que d'habitude)" },
    nl: { text: "cough that's new or worsening", sup_text: "(continuous, more than usual)" },
    value: "1",
  },
  barking_cough: {
    en: {
      text: "barking cough, making a squeaky or whistling noise when breathing",
      sup_text: "(croup)",
    },
    fr: {
      text: "toux qui ressemble à un aboiement, grincement ou sifflement lors de la respiration",
      sup_text: "(laryngotrachéite aiguë)",
    },
    nl: {
      text: "barking cough, making a squeaky or whistling noise when breathing",
      sup_text: "(croup)",
    },
    value: "1",
  },
  shortness_of_breath: {
    en: { text: "shortness of breath", sup_text: "(out of breath, unable to breathe deeply)" },
    fr: { text: "essoufflement", sup_text: "(souffle court, incapacité de respirer profondément)" },
    nl: { text: "shortness of breath", sup_text: "(out of breath, unable to breathe deeply)" },
    value: "1",
  },
  sore_throat: { en: { text: "sore throat" }, fr: { text: "mal de gorge" }, value: "0.25" },
  difficulty_swallowing: {
    en: { text: "difficulty swallowing" },
    fr: { text: "difficulté à avaler" },
    nl: { text: "moeite met slikken" },
    value: "0.25",
  },
  hoarse_voice: {
    en: { text: "hoarse voice", sup_text: "(more rough or harsh than normal)" },
    fr: { text: "voix rauque", sup_text: "(plus rude que d’habitude)" },
    nl: { text: "hoarse voice", sup_text: "(more rough or harsh than normal)" },
    value: "0.25",
  },
  runny_nose: { en: { text: "runny nose" }, fr: { text: "nez qui coule" }, nl: { text: "loopneus" }, value: "0.25" },
  stuffy_nose: {
    en: { text: "stuffy or congested nose" },
    fr: { text: "nez bouché ou congestionné" },
    nl: { text: "stuffy or congested nose" },
    value: "0.25",
  },
  lost_taste_smell: {
    en: { text: "lost sense of taste or smell" },
    fr: { text: "perte du sens du goûter ou de l’odorat" },
    nl: { text: "lost sense of taste or smell" },
    value: "0.5",
  },
  headache: { en: { text: "headache" }, fr: { text: "mal de tête" }, value: "0.25" },
  digestive_issues: {
    en: { text: "digestive issues", sup_text: "(nausea/vomiting, diarrhea, stomach pain)" },
    fr: { text: "problèmes digestifs", sup_text: "(nausées ou vomissements, diarrhée, maux de ventre)" },
    nl: { text: "digestive issues", sup_text: "(nausea/vomiting, diarrhea, stomach pain)" },
    value: "0.5",
  },
  fatigue: {
    en: { text: "fatigue", sup_text: "(lack of energy, extreme tiredness)" },
    fr: { text: "fatigue", sup_text: "(manque d'énergie, fatigue extrême)" },
    nl: { text: "fatigue", sup_text: "(lack of energy, extreme tiredness)" },
    value: "0.5",
  },
  falling_down: {
    en: { text: "falling down more than usual" },
    fr: { text: "tomber plus souvent que d’habitude" },
    nl: { text: "falling down more than usual" },
    value: "1",
  },
  kids_symptoms: {
    en: { text: "for young children and infants: sluggishness or lack of appetite" },
    fr: { text: "pour les jeunes enfants et les nourrissons : léthargie ou manque d’appétit" },
    nl: { text: "for young children and infants: sluggishness or lack of appetite" },
    value: "1",
  },
  none_of_the_above: { en: { text: "none of the above" }, fr: { text: "aucune de ces réponses" }, nl: { text: "geen van allen" }, value: "0" },
}

const noSymptomsId = "none_of_the_above"

export { symptomsTitle, symptoms, noSymptomsId }
