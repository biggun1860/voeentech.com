import React from "react"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import PageHeading from "~/components/styled/page-heading"
import ProductList from "~/components/product-list"
import SEO from "~/components/seo"

const ProductsPage = ({
  data: {
    allCloudBaseProduct: { edges },
  },
}) => {
  const flatProducts = edges.map(({ node }) => node)

  const seo = { title: "Products" }

  return (
    <Layout>
      <SEO seo={seo} />
      <PageHeading>Products</PageHeading>
      <ProductList products={flatProducts} />
    </Layout>
  )
}

export const productsPageQuery = graphql`
  query ProductListQuery {
    allCloudBaseProduct {
      edges {
        node {
          specifications
          title
          slug
          id
          description
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  aspectRatio: 1.3
                )
              }
            }
          }
        }
      }
    }
  }
`

export default ProductsPage
