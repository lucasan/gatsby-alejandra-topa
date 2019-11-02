import React from "react"
import { Link } from "../link-animations"
import "./assets/styles.scss"

const Paginator = (props) => {
  const isFirst = props.currentPage === 1
  const isLast = props.currentPage === props.numPages
  const prefix = "/blog"
  const prevPage = props.currentPage - 1 === 1 ? prefix : `${prefix}/page/${(props.currentPage - 1).toString()}`
  const nextPage = `${prefix}/page/${(props.currentPage + 1).toString()}`

  const paginator = Array.from({ length: props.numPages }, (_, i) => {
    let markup = ""

    if (props.currentPage === i + 1) {
      markup = (
        <li className={"page-item disabled active"} key={`pagination-number${i + 1}`}>
          <Link to={`/#`} className={"page-link"}>
            {i + 1}
          </Link>
        </li>
      )
    } else {
      markup = (
        <li className={"page-item"} key={`pagination-number${i + 1}`}>
          <Link to={`${prefix}/${i === 0 ? "" : "page"}/${i === 0 ? "" : i + 1}`} className={"page-link"}>
            {i + 1}
          </Link>
        </li>
      )
    }

    return markup
  })

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {!isFirst && (
          <li className={"page-item"}>
            <Link to={prevPage} rel="prev" className={"page-link"}>
              Anterior
            </Link>
          </li>
        )}
        {paginator}
        {!isLast && (
          <li className={"page-item"}>
            <Link to={nextPage} rel="next" className={"page-link"}>
              Siguiente
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Paginator