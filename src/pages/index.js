import React from "react"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import CategoryList from "~/components/category-list"
import PageHeading from "~/components/styled/page-heading"

const IndexPage = ({ data: { allCloudBaseCategory } }) => {
  const categories = allCloudBaseCategory.edges
  const seo = { title: "Categories" }
  return (
    <Layout>
      <SEO seo={seo} />
      <PageHeading>Categories</PageHeading>
      <CategoryList categories={categories} />
    </Layout>
  )
}

export const query = graphql`
  query CategoriesQuery {
    allCloudBaseCategory {
      edges {
        node {
          name
          id
          slug
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

export default IndexPage
