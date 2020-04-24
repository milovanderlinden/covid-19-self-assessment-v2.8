import React, { useReducer, createContext } from "react"
import { noSymptomsId } from "../localized_content"

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const initialState = {}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SYMPTOM": {
      const { id, value } = action
      const updatedState = { ...state }

      if (updatedState.q2 && updatedState.q2.hasOwnProperty(id)) {
        delete updatedState.q2[id]
      } else {
        if (!updatedState.q2) updatedState.q2 = {}
        // This is the scenario "none of the above" was selected previous to this click
        if (id === noSymptomsId || updatedState.q2.hasOwnProperty(noSymptomsId)) {
          updatedState.q2 = {}
        }

        updatedState.q2[id] = value
      }

      updatedState.symptomScore = calculateTotalScore(updatedState)

      return updatedState
    }
    case "CONTINUE_CLICKED": {
      let updatedState = { ...state }
      if (!state.q2) updatedState = { ...state, q2: { noSymptoms: 0 }, symptomScore: 0 }

      return updatedState
    }
    case "YES_NO_RESPONSE": {
      const updatedState = { ...state }
      updatedState[action.question] = action.response
      return updatedState
    }
    case "SAT_START": {
      return { in_progress: true }
    }
    case "SAT_BACK_BUTTON_PRESSED": {
      return { ...state, in_progress: true }
    }
    case "SAT_DONE": {
      return { ...state, in_progress: false }
    }
    default:
      throw new Error(`Bad Action Type: ${action.type}`)
  }
}

function calculateTotalScore(state) {
  if (!state.q2) return 0

  return Object.values(state.q2)
    .map(val => parseFloat(val))
    .reduce((acc, cur) => acc + cur, 0)
}

/*
    q3 - healthcare workers
    q4 - rural
    q5 - at-risk
    q6 - travel
    q7 - exposure to covid-19
    q8 - exposure to respiratory symptoms

    r2 - symptomatic, self-isolate
    r3 - practice physical distancing
    r4 - at-risk, self-isolate
    r5 - travel, self-isolate
    r6 - possible exposure, self-isolate
    r7 - call telehealth/doctor
*/

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
