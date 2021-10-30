import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { formatDate } from "~/helpers/date-formatter"

function newsSlug(id) {
  return id.toLowerCase().replace("_", "-")
}

const NewsList = ({ newsList, gridCols }) => {
  return (
    <div className={`grid ${gridCols} gap-1 mb-10`}>
      {newsList.map(news => {
        return (
          <div className="mb-1 shadow-lg bg-white rounded-md">
            <Link to={`/news/${newsSlug(news.id)}`} key={news.id}>
              <div className="px-4 py-6">
                <p>
                  {news.title}{" "}
                  <span className="text-gray-400 float-right">
                    {formatDate(news.updatedAt)}
                  </span>
                </p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

NewsList.propTypes = {
  newsList: PropTypes.array,
  gridCols: PropTypes.string,
}

NewsList.defaultProps = {
  gridCols: "grid-cols-1",
}

export default NewsList
