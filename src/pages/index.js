import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import HomeHero from "../layouts/HomeHero"
import BenefitsSection from "../layouts/BenefitsSection"
import InfoGrid from "../layouts/InfoGrid"

import Plant from "../assets/icons/plant.svg"
import Thumb from "../assets/icons/thumb.svg"
import Trees from "../assets/icons/trees.svg"
import MilksGrid from "../layouts/MilksGrid"
import SaveBanner from "../layouts/SaveBanner"
import { isBrowser } from "../utils"
import ProductProperties from "../layouts/ProductProperties"
import BrownBanner from "../layouts/BrownBanner"
import HelloBanner from "../layouts/HelloBanner"
import RecipesSlider from "../layouts/RecipesSlider"

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
      greenMilk: file(relativePath: { eq: "verde.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      blueMilk: file(relativePath: { eq: "azul.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      browMilk: file(relativePath: { eq: "cafe.png" }) {
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
      slider1: file(relativePath: { eq: "slide-1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      slider2: file(relativePath: { eq: "slide-2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      slider3: file(relativePath: { eq: "slide-3.png" }) {
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
      title: "PLANT-BASED",
      description:
        "<p>A dairy-free drink that's <br/> high in proteins and low in sugar. </p>",
    },
    {
      image: <Thumb />,
      title: "Responsibly Sourced",
      description:
        "<p>Our upcycled bananas come straight from the farms of Ecuador. </p>",
    },
    {
      image: <Trees />,
      title: "SUSTAINABLE",
      description:
        "<p>Making Kunana uses less water than almond milk and creates fewer CO<sub>2</sub> emissions than traditional milk.</p>",
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

  const recipes = [
    {
      image: staticQuery.slider1,
    },
    {
      image: staticQuery.slider2,
    },
    {
      image: staticQuery.slider3,
    },
  ]

  return (
    <Layout
      seo={{
        title: "Kunana",
        metaDesc: "Plant-based milk made FROM UP-CYCLED BANANA",
      }}
    >
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
      <BrownBanner />
      <InfoGrid items={infoItems} />
      <SaveBanner
        title="Save one banana at the time."
        image={staticQuery.bananaHand}
      />
      <MilksGrid items={milks} />
      <ProductProperties
        productImage={staticQuery.milkJug}
        proteinImage={staticQuery.proteinImage}
        properties={productProperties}
      />
      <RecipesSlider title="healthy Recipes with Kunana" recipes={recipes} />

      <HelloBanner />
    </Layout>
  )
}

export default Index
