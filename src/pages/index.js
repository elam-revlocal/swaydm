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
import WhoWeAre from "../components/WhoWeAre"
import WhySway from "../components/WhySway"
import HowItWorks from "../components/HowItWorks"
import ReleaseInfo from "../components/ReleaseInfo"



export default function Home() {
  return (
    <Layout>
      <Seo title="Home" />
      <ProductHero 
      //dynamic 
      />
      {/* <WhoWeAre /> */}
      {/* <WhySway /> */}
      {/* <HowItWorks /> */}

      <ProductValues />
      {/* <ProductVideo /> */}
      {/* <ProductCategories /> */}
      <ProductHowItWorks />
      {/* <ReleaseInfo /> */}
      {/* <ProductTestimonials /> */}
      {/* <ProductCTA /> */}
      <ProductSmokingHero />
    </Layout>
  )
}
