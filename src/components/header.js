import React, {useState} from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ setOpenModal }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const toggleVisibility = () => {
    setIsCollapsed(!isCollapsed)
  };

  return (
    <header className="fixed w-full z-10">
      <nav className="w-full flex items-center justify-between flex-wrap lg:flex-no-wrap pb-0 lg:p-2 pin-t transition-all-300 py-2 bg-gray-800">
        <div className="container mx-2 md:mx-auto p-4 lg:px-8 flex flex-wrap justify-between items-center transition-padding py-2 lg:py-2">
          <Link
            className="lg:mr-8 text-white"
            to="/"
            onClick={() => setIsCollapsed(true)}
          >
            VOEENTECH
          </Link>
          <div className="block lg:hidden mt-1">
            <button
              className="flex items-center lg:items-start px-3 py-2 border rounded text-white border-white hover:text-green-500 hover:border-b hover:border-green-500"
              onClick={toggleVisibility}
            >
              <svg
                className="h-3 w-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`mt-2 lg:mt-0 w-full flex-col lg:flex lg:flex-row lg:w-auto lg:items-center justify-between text-white ${
              isCollapsed ? "hidden" : "flex"
            }`}
            onClick={() => setIsCollapsed(true)}
          >
            <Link className="m-2 text-white" to="/">
              Products
            </Link>
            <button
              className="m-2 text-white text-left"
              onClick={() => setOpenModal(true)}
            >
              Search
            </button>
            <Link className="m-2 text-white" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteName: PropTypes.string,
}

Header.defaultProps = {
  siteName: ``,
}

export default Header
