import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Logo from "../images/logo.svg"
import { Container } from '../Layout/CommonStyled'
import styled from "styled-components"

const HeaderStyled = styled.header`
  margin-bottom: 1.45rem;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:9999;
`

const HeaderWrapperStyled = styled(Container)`
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const LogoStyled = styled.img`
  width: 56px;
  margin: 0;
`

const MenuButtonStyled = styled.button`
  border: none;
  appearance: none;
  background: #333333;
  width: 29px;
  height: 29px;
  border-radius: 50%;
  cursor: pointer;

  > span {
    position:absolute;
    top:-99999px;
    left:-9999px;
    display:block;
  }
`

const Header = ({ siteTitle }) => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)

  const onMenuToggle = () => {
    setIsNavigationOpen(!isNavigationOpen)
  }
  return (
    <HeaderStyled>
      <HeaderWrapperStyled>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <LogoStyled src={Logo} alt="Andrys Logo" />
        </Link>
        <MenuButtonStyled onClick={onMenuToggle}><span>ToggleMenu</span></MenuButtonStyled>
      </HeaderWrapperStyled>
    </HeaderStyled>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
