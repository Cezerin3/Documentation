import { graphql, useStaticQuery } from "gatsby"
import React from "react"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image: any = (): any => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "cezerin-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      storeImage: file(relativePath: { eq: "cezerin-default-theme.webp" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plushaImage: file(relativePath: { eq: "cezerin-plusha-theme.webp" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dashboardImage: file(
        relativePath: { eq: "cezerin-dashboard-products.webp" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileOrderImage: file(
        relativePath: { eq: "cezerin-mobile-order-summary.webp" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileProductImage: file(
        relativePath: { eq: "cezerin-mobile-product.webp" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      signInEmailImage: file(
        relativePath: { eq: "cezerin-signin-email.webp" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lighthousePwaAuditImage: file(
        relativePath: { eq: "cezerin-store-lighthouse-pwa-audit.webp" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.logo?.childImageSharp?.fluid) {
    return <>Picture not found</>
  }

  return data

  // return [
  //   <Img fluid={data.logo.childImageSharp.fluid} />,
  //   <Img fluid={data.storeImage.childImageSharp.fluid} />,
  //   <Img fluid={data.plushaImage.childImageSharp.fluid} />,
  //   <Img fluid={data.dashboardImage.childImageSharp.fluid} />,
  //   <Img fluid={data.mobileOrderImage.childImageSharp.fluid} />,
  //   <Img fluid={data.signInEmailImage.childImageSharp.fluid} />,
  //   <Img fluid={data.mobileProductImage.childImageSharp.fluid} />,
  //   <Img fluid={data.lighthousePwaAuditImage.childImageSharp.fluid} />,
  // ]
}

export default Image
