import * as React from "react"
import { Header } from "../components/Header"
import { MainSection } from "../components/MainSection"
import { OurEvent } from "../components/OurEvent"
import { Cronograma } from "../components/Cronograma"
import { Footer } from "../components/Footer"
import "../components/reset.css"
import { SeInscreva } from "../components/SeInscreva"
import { Patrocinadores } from "../components/Patrocinadores"
import { Equipe } from "../components/Equipe"
import { BackToTop } from "../components/BackToTop"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <>
      <Helmet
        title="SEMAPED"
      />
      <Header/>
      <MainSection/>
      <OurEvent/>
      <Cronograma/>
      <SeInscreva/>
      <Patrocinadores/>
      <Equipe/>
      <Footer/>
      <BackToTop/>
    </>
  )
}

export default IndexPage
