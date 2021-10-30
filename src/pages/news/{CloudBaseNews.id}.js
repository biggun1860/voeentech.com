import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"

const NewsPage = ({ data }) => {
  const news = data.cloudBaseNews

  const seo = {
    title: news.title,
  }

  return (
    <Layout>
      <SEO seo={seo} />
      <ReactMarkdown
        className="prose md:w-4/5 mt-5 m-auto"
        children={news.content}
      />
    </Layout>
  )
}

export const query = graphql`
  query NewsQuery($id: String!) {
    cloudBaseNews(id: { eq: $id }) {
      id
      title
      content
      updatedAt
    }
  }
`

export default NewsPage
