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
  font-size: 6.2rem;
`

const Paragraph = styled.p`
  font-family: "Source Code Pro", monospace;
  color:#aedcec;
  text-decoration:underline;
`

const LinkList = styled.ul `
    margin:0;
    padding:0;
    list-style-type:none;
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    max-width:492px;
    margin:0 auto;
    font-family: "Source Code Pro", monospace;
    font-size:0.9rem;
    li > a {
        color:#aedcec;
        text-decoration:none;
        &:hover{
            text-decoration:underline;
        }
    }
`
const Wrapper = styled.div`
  text-align: center;
`
const CustomRow = styled(Row)`
  @media(max-width: 1044px) {
    ${Heading} {
      font-size: 4.2rem;
    }
  }
  @media(max-width:480px) { 
    ${LinkList} {
        display:block;
    }
  }
`

function Contact() {
  return (
    <Section className="s-contact" backgroundColor="#333333" style = {{ paddingTop: 0 }}>
      <Container>
        <CustomRow justifyContent="center">
          <Wrapper>
            <LogoLink href="/">
              <Logo color="#aedcec" />
            </LogoLink>
            <Heading>Contact</Heading>
            <Paragraph>The important things always come in different ways.</Paragraph>
            <LinkList>
                <li><a href="https://www.linkedin.com/in/andrys-frias-047ab8152/" rel="noopener noreferrer" target="_blank" >Linkedin</a></li>
                <li><a href="" rel="noopener noreferrer" target="_blank" >issue</a></li>
                <li><a href="mailto:hithere@andrysfrias.com" rel="noopener noreferrer" target="_blank" >hithere@andrysfrias.com</a></li>
            </LinkList>
          </Wrapper>
        </CustomRow>
      </Container>
    </Section>
  )
}

export default Contact
