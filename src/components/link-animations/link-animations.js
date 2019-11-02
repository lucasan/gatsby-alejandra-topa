import React from "react"
import { Spring } from "react-spring/renderprops-universal"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"

export const Animate = (props) => (
  <TransitionState>
    {({ transitionStatus, exit, entry }) => {
      const mount = ['entering', 'entered'].includes(transitionStatus)
      const seconds = mount ? entry.length : exit.length

      return (
        <Spring
          to={{
            transform: `translateY(${mount ? 0 : '300px'})`,
            opacity: mount ? 1 : 0,
          }}
          config={{
            duration: seconds * 1000,
          }}
        >
          {properties => <div style={properties}>{props.children}</div>}
        </Spring>
      )
    }}
  </TransitionState>
)

export const Link = ({ to, children, className, activeClassName }) => (
  <TransitionLink activeClassName={activeClassName} className={className} to={to} exit={{ length: 0.4 }} entry={{ length: 0.4 }}>
    {children}
  </TransitionLink>
)
