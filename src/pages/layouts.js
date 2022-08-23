import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { LayoutTitle } from "../styles/app.styles"

import Layout from "../components/layout"
import MiscContent from "../layouts/MiscContent"
import HomeHero from "../layouts/HomeHero"
import InfoGrid from "../layouts/InfoGrid"
import BenefitsSection from "../layouts/BenefitsSection"
import MilksGrid from "../layouts/MilksGrid"

import Plant from "../assets/icons/plant.svg"
import Thumb from "../assets/icons/thumb.svg"
import Trees from "../assets/icons/trees.svg"
import SaveBanner from "../layouts/SaveBanner"
import ProductProperties from "../layouts/ProductProperties"

const Layouts = () => {
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
      greenMilk: file(relativePath: { eq: "green-milk.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      blueMilk: file(relativePath: { eq: "blue-milk.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      browMilk: file(relativePath: { eq: "brow-milk.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      bananaHand: file(relativePath: { eq: "banana-hand.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      milkJug: file(relativePath: { eq: "milk-jug.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      proteinImage: file(relativePath: { eq: "protein-background.png" }) {
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

  const milks = [
    {
      image: staticQuery.greenMilk,
      title: "Original Flavor",
      background: "#3DAC48",
    },
    { image: staticQuery.browMilk, title: "Chocolate", background: "#FFD100" },
    {
      image: staticQuery.blueMilk,
      title: "Unsweetened",
      background: "#00B2E4",
    },
  ]

  const productProperties = [
    {
      title: "use with just about anything",
      description:
        "cereal, coffee, maybe even to dunk french fries in? We’re not judging, go ahead and go bananas.",
    },
    {
      title: "Low in sugar, high in amazing",
      description:
        "Just as nutritious as other non-dairy milks. But with BANANAS.",
    },
    {
      title: "Low in sugar, high in amazing",
      description:
        "Just as nutritious as other non-dairy milks. But with BANANAS.",
    },
  ]

  return (
    <Layout
      seo={{
        title: "Layouts - ONLY FOR DEV",
        metaRobotsNoindex: "noindex",
        metaRobotsNofollow: "nofollow",
      }}
    >
      <LayoutTitle>MiscContent</LayoutTitle>
      <MiscContent content={`<p>Some content Here</p>`} />

      <LayoutTitle>HomeHero</LayoutTitle>
      <HomeHero
        backgroundImage={staticQuery.backgroundImage}
        logoImage={staticQuery.logo}
        productImage={staticQuery.productImage}
      />

      <LayoutTitle>BenefitsSection</LayoutTitle>
      <BenefitsSection
        backgroundImage={staticQuery.benefitsImage}
        tastyImg={staticQuery.tastyImg}
        benefits={benefits}
      />

      <LayoutTitle>InfoGrid</LayoutTitle>
      <InfoGrid items={infoItems} />

      <LayoutTitle>SaveBanner</LayoutTitle>
      <SaveBanner
        title="Save one banana at the time."
        image={staticQuery.bananaHand}
      />

      <LayoutTitle>MilksGrid</LayoutTitle>
      <MilksGrid items={milks} />

      <LayoutTitle>ProductProperties</LayoutTitle>
      <ProductProperties
        productImage={staticQuery.milkJug}
        proteinImage={staticQuery.proteinImage}
        properties={productProperties}
      />
    </Layout>
  )
}

export default Layouts
