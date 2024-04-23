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
import GreenBanner from "../layouts/GreenBanner/green-banner.component"
import LogosBanner from "../layouts/LogosBanner"

const Index = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "bg-spot-hero.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      productImage: file(relativePath: { eq: "product-image.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      stickerImage: file(relativePath: { eq: "sticker.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      superFruit: file(relativePath: { eq: "superfruta.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      coolBananas: file(relativePath: { eq: "volverse-verde.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      bananasVerdes: file(relativePath: { eq: "bananas-cool.jpg" }) {
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
      greenMilk: file(relativePath: { eq: "pack-original.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      blueMilk: file(relativePath: { eq: "pack-nosugar.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      browMilk: file(relativePath: { eq: "pack-chocolate.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      spotOriginal: file(relativePath: { eq: "spot-original.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      spotChocolate: file(relativePath: { eq: "spot-chocolate.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      spotNoSugar: file(relativePath: { eq: "spot-sinazucar.png" }) {
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
      bananaGafas: file(relativePath: { eq: "banana-gafas.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      bananaDialog: file(relativePath: { eq: "banana-dialog.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }

      innovopro: file(relativePath: { eq: "innovopro.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      elOrdenio: file(relativePath: { eq: "el-ordenio.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      tesalia: file(relativePath: { eq: "tesalia.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  const infoItems = [
    {
      image: staticQuery.superFruit,
      alt: "Hombre recolectanto bananas",
      title: "SUPERFRUTA Y SUPERGRANO",
      description:
        "¿Sabías que las bananas son la fruta más popular del mundo? ¡Y con razón! Las bananas son una gran fuente de potasio, fibra y vitamina C. Kunana también esta cargado de proteína que proviene del garbanzo, un super grano alto en proteína, fibra, vitaminas y minerales.",
    },
    {
      image: staticQuery.bananasVerdes,
      alt: "Bananos verdes",
      title: "BANANAS COOL",
      description:
        "No todas las bananas que se cultivan terminan en las perchas de los supermercados. Las bananas “feas” contienen los mismos nutrientes, pero a menudo son descartadas sólo por su apariencia. De hecho, cada año se desperdician alrededor de 1,3 millones de toneladas de bananas. ¡Nosotros creemos que son lo suficientemente perfectas para consumirlas!",
    },
    {
      image: staticQuery.coolBananas,
      alt: "Racimo de verde",
      title: "VOLVERSE VERDE",
      description: 
        "Ecuador es el mayor exportador de banano del mundo. Utilizar bananas “feas” evita el desperdicio de alimentos y ayuda a los agricultores locales y sus comunidades a generar mayores ingresos.",
    },
  ]

  const benefits = [
    {
      image: <Plant />,
      title: "100% PLANT BASED",
      description:
        "<p>Una bebida libre de lácteos que es alta en proteína y bajo en azúcar. </p>",
    },
    {
      image: <Trees />,
      title: "SUSTENTABLE",
      description:
        "<p>Kunana utiliza menos agua que una bebida de almendras, ocupa menos espacio de cultivo que la avena, y genera menos emisiones de CO2 que la leche de vaca.</p>",
    },
    {
      image: <Thumb />,
      title: "ORIGEN RESPONSAbLE",
      description:
        "<p>Nuestras bananas rescatadas vienen directo de los cultivos de Ecuador.</p>",
    },
  ]

  const milks = [
    {
      image: staticQuery.greenMilk,
      title: "Sabor Original",
      background: "#60D06B",
      spot: staticQuery.spotOriginal,
    },
    {
      image: staticQuery.browMilk,
      title: "Chocolate",
      background: "#5B3529",
      spot: staticQuery.spotChocolate,
    },
    {
      image: staticQuery.blueMilk,
      title: "Sin azúcar",
      background: "#51D1FF",
      spot: staticQuery.spotNoSugar,
    },
  ]

  const productProperties = [
    {
      title: "INGREDIENTES SIMPLES Y HONESTOS",
      description:
        "Kunana utiliza puré de banana, garbanzos, vitaminas y minerales para ofrecerte una bebida nutritiva y con un sabor y textura únicos que seguro te encantará.",
    },
    {
      title: "BAJO EN AZÚCAR, ALTO EN INCREÍBLE",
      description:
        "¿Una leche vegetal elaborada a base de frutas? Kunana es una gran fuente de calcio,VITAMINA D, B12 y fibra. Cada porción contiene 5 gramos de proteína de origen vegetal.",
    },
    {
      title: "ÚSALO COMO QUIERAS",
      description:
        "Viértelo en tu cereal, úsalo en batidos, agrégalo a tu café. Bébelo solo o sumerge tus papas fritas en él. No te juzgamos ;) ¡Adelante, vuélvete loco, go bananas!",
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

  const Logos = [{ logo: staticQuery.tesalia, alt: "Tesalia Logo" }]

  return (
    <Layout
      seo={{
        title: "Kunana",
        metaDesc: "Plant-based milk made FROM UP-CYCLED BANANA",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
      }}
    >
      <HomeHero
        backgroundImage={staticQuery.backgroundImage}
        logoImage={staticQuery.logo}
        productImage={staticQuery.productImage}
        stickerImage={staticQuery.stickerImage}
      />
      <BenefitsSection
        backgroundImage={staticQuery.benefitsImage}
        tastyImg={staticQuery.tastyImg}
        benefits={benefits}
        title="SU SABOR TE SORPRENDERÁ"
      />
      <GreenBanner
        firstImg={staticQuery.bananaDialog}
        firstText="Creemos que las bananas imperfectas hacen una bebida bastante perfecta"
        secondImg={staticQuery.bananaGafas}
        secondText="Hecho con bananas rescatadas."
      />
      <BrownBanner />
      <InfoGrid items={infoItems} />
      {/*<SaveBanner*/}
      {/*  title="REDUCING CARBON FOOTPRINT ONE BANANA AT A TIME."*/}
      {/*  image={staticQuery.bananaHand}*/}
      {/*/>*/}
      <MilksGrid items={milks} />
      <ProductProperties
        productImage={staticQuery.milkJug}
        proteinImage={staticQuery.proteinImage}
        properties={productProperties}
      />
      <LogosBanner title="Aliado estratégico" logos={Logos} />
      {/*<RecipesSlider title="THE HEALTHY TASTE OF KUNANA" recipes={recipes} />*/}

      <HelloBanner />
    </Layout>
  )
}

export default Index
