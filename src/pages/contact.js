import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"

const IndexPage = ({ data: { cloudBaseContact } }) => {
  const seo = { title: "Categories" }
  return (
    <Layout>
      <SEO seo={seo} />
      <ReactMarkdown
        className="prose md:w-4/5 mt-5 m-auto"
        children={cloudBaseContact.description}
      />
    </Layout>
  )
}

export const query = graphql`
  query ContactQuery {
    cloudBaseContact {
      description
    }
  }
`

export default IndexPage
