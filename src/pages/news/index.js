import React from "react"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import PageHeading from "~/components/styled/page-heading"
import NewsList from "~/components/news-list"
import SEO from "~/components/seo"

const NewsListPage = ({
  data: {
    allCloudBaseNews: { edges },
  },
}) => {
  const flatNewsList = edges
    .map(({ node }) => node)
    .sort((a, b) => b.updatedAt - a.updatedAt)

  const seo = { title: "NewsList" }

  return (
    <Layout>
      <SEO seo={seo} />
      <PageHeading>News</PageHeading>
      <NewsList newsList={flatNewsList} />
    </Layout>
  )
}

export const newsListPageQuery = graphql`
  query NewsListQuery {
    allCloudBaseNews {
      edges {
        node {
          id
          title
          updatedAt
        }
      }
    }
  }
`

export default NewsListPage
