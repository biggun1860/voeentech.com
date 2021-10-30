import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Layout from "~/components/layout"
import PageHeading from "~/components/styled/page-heading"
import MoreLink from "~/components/styled/more"
import ProductList from "~/components/product-list"
import NewsList from "~/components/news-list"
import SEO from "~/components/seo"

const IndexPage = ({
  data: {
    cloudBaseHome,
    allCloudBaseNews: { edges: newsList },
  }
}) => {
  const seo = { title: "Home" }
  const flatNewsList = newsList.map(({ node }) => node)
  const latestNewsList = flatNewsList
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, 5)

  return (
    <Layout>
      <SEO seo={seo} />
      <PageHeading>ABOUT US</PageHeading>
      <ReactMarkdown className="mb-10" children={cloudBaseHome.about} />
      <PageHeading>HOT PRODUCTS</PageHeading>
      <MoreLink to="/products" />
      <ProductList products={cloudBaseHome.hotProducts} />
      <PageHeading>NEWS</PageHeading>
      <MoreLink to="/news" />
      <NewsList newsList={latestNewsList} />
    </Layout>
  )
}

export const indexPageQuery = graphql`
  query HomeQuery {
    allCloudBaseNews {
      edges {
        node {
          id
          title
          updatedAt
        }
      }
    }
    cloudBaseHome {
      about
      hotProducts {
        title
        slug
        id
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
`

export default IndexPage
