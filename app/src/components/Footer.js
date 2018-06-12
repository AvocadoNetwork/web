import React from 'react'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Design: by <a href="https://twitter.com/donvikas">Vikas Yadav </a>.
      Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
    </p>
  </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
