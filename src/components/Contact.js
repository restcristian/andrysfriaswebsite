import React from "react"
import { Container, Section, Row } from "../Layout/CommonStyled"
import Logo from "../components/Logo"
import styled from "styled-components"

const LogoLink = styled.a`
  text-decoration: none;
  width: 110px;
  display: inline-block;
`

const Heading = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #aedcec;
  font-size:6.2rem;
`

const Wrapper = styled.div`
    text-align:center;
`; 
const CustomRow = styled(Row)`
    @media(max-width:1044px){
        ${Heading} {
            font-size:4.2rem;
        }
    }
`

function Contact() {
  return (
    <Section className="s-contact" backgroundColor="#333333">
      <Container>
        <CustomRow justifyContent="center">
          <Wrapper>
            <LogoLink href="/">
              <Logo color="#aedcec" />
            </LogoLink>
            <Heading>Contact</Heading>
          </Wrapper>
        </CustomRow>
      </Container>
    </Section>
  )
}

export default Contact
