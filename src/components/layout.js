import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "~/components/footer"

import Header from "~/components/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteNameQuery {
      cloudBaseGlobal {
        siteName
      }
    }
  `)

  return (
    <div className="bg-gray-50 relative">
      <Header siteName={data.cloudBaseGlobal.siteName || ""} />
      <div className="flex flex-col max-w-screen-lg m-auto min-h-screen px-6 pt-20 md:px-10">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
