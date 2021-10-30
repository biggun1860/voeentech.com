import React from "react"
import { Link } from "gatsby"

const More = ({ to }) => (
  <Link className="inline-block float-right text-gray-400" to={to}>
    MORE &gt;
  </Link>
)

export default More
