import * as React from "react"
import { Header } from "../components/Header"
import { MainSection } from "../components/MainSection"
import { OurEvent } from "../components/OurEvent"
import "../components/reset.css"

const IndexPage = () => {
  return (
    <>
      <Header/>
      <MainSection/>
      <OurEvent/>
    </>
  )
}

export default IndexPage
