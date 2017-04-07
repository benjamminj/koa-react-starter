import React, { PropTypes } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
`
const Header = ({ children }) => (
  <StyledHeader>
    {children}
    <h1>Hi there</h1>
  </StyledHeader>
)

const { element, arrayOf } = PropTypes

Header.propTypes = {
  children: element || arrayOf(element)
}

export default Header
