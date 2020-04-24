import React, { useContext, useEffect, useState } from "react"
import { navigate } from "@reach/router"
import Button from "./button"
import { GlobalDispatchContext } from "../context/global-context-provider"

const YesNoButtons = ({ lang, noLink, yesLink }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const [url, setUrl] = useState()

  useEffect(() => {
    setUrl(window.location.pathname)
  }, [])

  const handleClick = (toLink, isYes = false) => {
    const splitUrl = url.split("/")
    const urlFragment = splitUrl.pop() || splitUrl.pop()
    dispatch({ type: "YES_NO_RESPONSE", question: urlFragment, response: isYes })
    navigate(toLink)
  }

  return (
    <div className="ontario-form__button-wrapper ontario-text-center">
      <Button text={lang === "fr" ? "Non" : "No"} clickHandler={() => handleClick(noLink)} />
      <Button text={lang === "fr" ? "Oui" : "Yes"} clickHandler={() => handleClick(yesLink, true)} />
    </div>
  )
}

export default YesNoButtons
