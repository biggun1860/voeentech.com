import React, { useState } from "react"
import { graphql } from "gatsby"

import SearchResults from "~/components/search-results"
import Layout from "~/components/layout"
import PageHeading from "~/components/styled/page-heading"
import ProductList from "~/components/product-list"
import SEO from "~/components/seo"
import SearchIcon from "~/images/search-icon.svg"

const ProductsPage = ({
  data: {
    allCloudBaseProduct: { edges },
  },
}) => {
  const [openModal, setOpenModal] = useState(false)
  const flatProducts = edges.map(({ node }) => node)

  const seo = { title: "Products" }

  return (
    <Layout>
      <SEO seo={seo} />
      <PageHeading>Products</PageHeading>
      <a
        className="inline-block float-right"
        onClick={() => setOpenModal(true)}
      >
        <img src={SearchIcon} className="w-5" alt="Search Icon" />
      </a>
      <ProductList products={flatProducts} />
      {openModal && (
        <div className="h-screen max-w-screen-lg m-auto fixed bottom-0 top-0 right-0 left-0 px-6 pb-10 pt-20 md:p-10 md:pt-40">
          <SearchResults setOpenModal={setOpenModal} openModal={openModal} />
        </div>
      )}
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
