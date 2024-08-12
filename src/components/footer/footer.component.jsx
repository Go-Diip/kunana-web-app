import React, { useState } from "react"

import * as S from "./footer.styles"
import { Container } from "@mui/material"

import InstagramIcon from "../../assets/insta.svg"
import FbIcon from "../../assets/fb.svg"
import YtIcon from "../../assets/yt.svg"
import { useForm } from "react-hook-form"
import { graphql, useStaticQuery } from "gatsby"

const Footer = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })

  const onSubmit = async data => {
    setIsLoading(true)
    setSuccessMessage("")
    setErrorMessage("")

    setTimeout(() => {
      setIsLoading(false)
      setSuccessMessage("Thanks for subscribing!")
    }, 2000)

    console.log(data)
  }

  const staticQuery = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "footer-banner.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <S.Wrapper className={className}>
      <S.BgImage img={staticQuery.backgroundImage} />
      <S.CustomContainer maxWidth="xl">
        <S.TopWrapper>
          <S.FooterLogo />
          <S.InputWrapper>
            <S.FooterTitle>
              SIGN UP TO RECEIVE OUR NEWSLETTER <br />
              AND MORE FROM KUNANA
            </S.FooterTitle>

            {!successMessage ? (
              <S.FormWrapper>
                <S.CustomForm onSubmit={handleSubmit(onSubmit)}>
                  <S.Input
                    name="email"
                    register={register}
                    errors={errors}
                    label="Email"
                    isRequired
                  />
                  <S.SubmitButton
                    type="submit"
                    className="brown"
                    loading={isLoading}
                  >
                    Submit
                  </S.SubmitButton>
                </S.CustomForm>
                {errorMessage && (
                  <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
                )}
              </S.FormWrapper>
            ) : (
              <S.SuccessMessage>{successMessage}</S.SuccessMessage>
            )}
          </S.InputWrapper>
        </S.TopWrapper>
        <S.BottomWrapper>
          <S.SocialIconsWrapper>
            <S.ExternalLink href="https://www.instagram.com/go_kunana/" target="_blank">
              <InstagramIcon />
            </S.ExternalLink>
            <S.ExternalLink href="/" target="_blank">
              <FbIcon />
            </S.ExternalLink>
            <S.ExternalLink href="/" target="_blank">
              <YtIcon />
            </S.ExternalLink>
          </S.SocialIconsWrapper>
          <S.LinksWrapper>
            <S.CustomScrollLink
              href="#homeHero"
              spy={true}
              smooth={true}
              offset={-100}
              to="homeHero"
            >
              Home
            </S.CustomScrollLink>
            <S.CustomScrollLink
              href="#ourStory"
              spy={true}
              offset={-100}
              smooth={true}
              to="ourStory"
            >
              Our Story
            </S.CustomScrollLink>
            <S.CustomScrollLink
              href="#ourMilk"
              spy={true}
              smooth={true}
              offset={-100}
              to="ourMilk"
            >
              Our Milk
            </S.CustomScrollLink>
            <S.CustomScrollLink
              spy={true}
              href="#ourBenefits"
              smooth={true}
              offset={-100}
              to="ourBenefits"
            >
              Our Benefits
            </S.CustomScrollLink>
          </S.LinksWrapper>
        </S.BottomWrapper>
        <S.TermsWrapper>
          <S.Label>Kunana {new Date().getFullYear()}</S.Label>
          <S.ExternalLink
            className="diip"
            href="https://godiip.com"
            target="_blank"
          >
            Powered by DIIP
          </S.ExternalLink>
        </S.TermsWrapper>
      </S.CustomContainer>
    </S.Wrapper>
  )
}

export default Footer
