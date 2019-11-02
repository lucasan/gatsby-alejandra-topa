import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "../link-animations"

const MainMenuItems = () => {

  const menu = useStaticQuery(
    graphql`
      query {
        wordpressWpApiMenusMenusItems(slug: {eq: "menu-principal"}) {
          items {
            title
            url
            object_id
            object_slug
            wordpress_children {
              title
              url
              object_id
              object_slug
              wordpress_children {
                title
                url
                object_id
                object_slug
              }
            }
          }
        }
      }
    `,
  )

  return menu.wordpressWpApiMenusMenusItems.items
}

const BuildMenu = (items, props) => (
  <ul className={props.className} id={props.id}>
    {items.map((item) => (
      <li key={item.object_id} id={item.object_slug}>
        <Link to={item.url} activeClassName="is-active" className={"navbar-link"}>
          <span>{item.title}</span>
        </Link>
        {item.wordpress_children ? BuildMenu(item.wordpress_children, {
          className: "dropdown-menu",
          id: `child-${item.object_slug}`,
        }) : null}
      </li>
    ))}
  </ul>
)

const SiteMainMenu = (props) => {
  const items = MainMenuItems()

  return (
    BuildMenu(items, props)
  )
}

export default SiteMainMenu