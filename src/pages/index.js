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
      superFruit: file(relativePath: { eq: "superfruit.JPG" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      coolBananas: file(relativePath: { eq: "cool-bananas.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      goingGreen: file(relativePath: { eq: "going-green.JPG" }) {
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
      image: staticQuery.superFruit,
      title: "SUPERFRUIT",
      description:
        "Did you know that bananas are the world's most popular fruit? And with good reason! Bananas are a great source of potassium, fiber, and vitamin C.",
    },
    {
      image: staticQuery.coolBananas,
      title: "COOL BANANAS",
      description:
        'Not every bunch of bananas gets picked for the store shelves. "Misshapen" bananas pack all the same nutrients, but often go unloved. In fact, some 1.3 million tons of bananas go to waste each year. We still find them "a-peeling" enough to use! ',
    },
    {
      image: staticQuery.goingGreen,
      title: "GOING GREEN",
      description:
        "Ecuador is the world's largest exporter of bananas. Upcycling unused bananas prevents waste, and helps local farmers and their communities share in the benefits of a full crop yield.",
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
      title: "Original",
      background: "#3DAC48",
    },
    {
      image: staticQuery.browMilk,
      title: "Chocolate",
      background: "rgb(98, 51, 17)",
    },
    {
      image: staticQuery.blueMilk,
      title: "Unsweetened",
      background: "#00B2E4",
    },
  ]

  const productProperties = [
    {
      title: "HONEST, SIMPLE INGREDIENTS",
      description:
        "We create our banana milk with a blend of banana puree, chickpeas and water. It delivers a unique natural taste with a creamy texture you're sure to love. ",
    },
    {
      title: "Low in sugar, high in amazing",
      description:
        "A non-dairy milk made from fruit? Kunana is a great source of natural calcium, fiber, vitamin B12 and potassium. Each serving contains 5 grams of plant-based protein.",
    },
    {
      title: "USE IT ANY WAY YOU WANT",
      description:
        "Pour it in your cereal. Add it to your coffee. Drink it straight up, or dunk your French fries in it. We're not judging. Go ahead, go bananas! ",
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
        title="REDUCING CARBON FOOTPRINT ONE BANANA AT A TIME."
        image={staticQuery.bananaHand}
      />
      <MilksGrid items={milks} />
      <ProductProperties
        productImage={staticQuery.milkJug}
        proteinImage={staticQuery.proteinImage}
        properties={productProperties}
      />
      <RecipesSlider title="THE HEALTHY TASTE OF KUNANA" recipes={recipes} />

      <HelloBanner />
    </Layout>
  )
}

export default Index
