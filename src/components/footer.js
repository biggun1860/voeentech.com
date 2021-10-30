import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      cloudBaseHome {
        footer
      }
    }
  `)

  return (
    <footer className="flex justify-between pb-4">
      <p className="text-sm font-semibold text-gray-600">
        {data.cloudBaseHome.footer}
      </p>
    </footer>
  )
}

export default Footer
