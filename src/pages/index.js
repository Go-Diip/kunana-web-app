import React from "react"

import Layout from "../components/layout"
import HomeHero from "../layouts/HomeHero"
import BrownBanner from "../layouts/brown-banner"

const NotFoundPage = () => (
  <Layout seo={{ title: "Kunana - Coming Soon!" }}>
    <HomeHero />
    <BrownBanner />
  </Layout>
)

export default NotFoundPage
