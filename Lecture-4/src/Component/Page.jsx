import { useState } from "react";
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'

export default function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}
