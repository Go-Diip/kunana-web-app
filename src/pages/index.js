import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import HomeHero from "../layouts/HomeHero"
import BenefitsSection from "../layouts/BenefitsSection"
import InfoGrid from "../layouts/InfoGrid"

import Plant from "../assets/icons/plant.svg"
import Thumb from "../assets/icons/thumb.svg"
import Trees from "../assets/icons/trees.svg"

const Index = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "palm.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      productImage: file(relativePath: { eq: "product-image.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      infoImg: file(relativePath: { eq: "info-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      tastyImg: file(relativePath: { eq: "tasty-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      benefitsImage: file(relativePath: { eq: "benefits.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  const infoItems = [
    {
      image: staticQuery.infoImg,
      title: "WASTE",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint",
    },
    {
      image: staticQuery.infoImg,
      title: "COMMUNITY",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint",
    },
    {
      image: staticQuery.infoImg,
      title: "COMMUNITY",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint",
    },
  ]

  const benefits = [
    {
      image: <Plant />,
      title: "Plant based",
      description: "High in proteins, low in sugar, dairy-free beverage.",
    },
    {
      image: <Thumb />,
      title: "Responsibly Sourced",
      description:
        "About 100,000 tons of imperfect up-cycled bananas from Ecuador, which supports their farmers with additional revenue. ",
    },
    {
      image: <Trees />,
      title: "Better for the Planet",
      description:
        "Less CO2 emissions than traditional milk. Less water than almonds.",
    },
  ]
  return (
    <Layout seo={{ title: "Kunana - Coming Soon!" }}>
      <HomeHero
        backgroundImage={staticQuery.backgroundImage}
        logoImage={staticQuery.logo}
        productImage={staticQuery.productImage}
      />
      <BenefitsSection
        backgroundImage={staticQuery.benefitsImage}
        tastyImg={staticQuery.tastyImg}
        benefits={benefits}
      />
      <InfoGrid items={infoItems} />
    </Layout>
  )
}

export default Index
