import React from "react"
import Layout from "../components/UI/Layout"
import Seo from "../components/Seo"
import ProductHero from "../components/ProductHero"
import ProductValues from "../components/ProductValues"
import ProductCategories from "../components/ProductCategories"
import ProductHowItWorks from "../components/ProductHowItWorks"
import ProductCTA from "../components/ProductCTA"
import ProductSmokingHero from "../components/ProductSmokingHero"
import ProductTestimonials from "../components/ProductTestimonials"
import ProductVideo from "../components/ProductVideo"
import ProductAbout from "../components/ProductAbout"

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" />
      <ProductHero dynamic />
      <ProductAbout />
      <ProductValues />
      <ProductVideo />
      {/* <ProductCategories /> */}
      {/* <ProductHowItWorks /> */}
      <ProductTestimonials />
      {/* <ProductCTA /> */}
      <ProductSmokingHero />
    </Layout>
  )
}
