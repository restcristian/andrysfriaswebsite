import React from "react"
import { Container, Section, Row } from "../Layout/CommonStyled"
import styled from "styled-components"

const HeadingText = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 6.7rem;
  line-height: 1;
  display: block;
  span {
    display: block;
    &:nth-child(2) {
      font-weight: 300;
    }
  }
`

const SubHeadingText = styled.h2 `
  font-family: 'Source Code Pro', monospace;
  text-decoration:underline;
  font-size: 1.2rem;
`

const Paragraph = styled.p`
  margin:0;
  font-family:'Source Code Pro', monospace;
  font-size: 1rem;

  .stuff {
     display:inline-block;
     padding:0 40px;
     position:relative;
     box-sizing:border-box;
     
     &:before {
       content:'';
       position:absolute;
       bottom:0;
       left:0;
       width:100%;
       height:1px;
       background-color:currentColor;
     }
  }

  .hi {
    font-weight:bold;
    text-decoration:none;
    color:#000000;
  }

`
const Col = styled.div`
  max-width:1004px;
  padding-left:175px;
`

const CustomRow = styled(Row) `
  @media(max-width:1044px) {
    ${Col} {
      padding:0;
    }
    ${HeadingText}{
      font-size:3rem;
    }
    ${SubHeadingText} {
      font-size:0.8rem;
    }
    ${Paragraph} {
      font-size:0.7rem;
    }
  }
`;

function Hero() {
  return (
    <Section className="s-hero" backgroundColor="#beecfa">
      <Container>
        <CustomRow alignItems = "center">
          <Col>
            <HeadingText>
              <span>Hello there!</span>
              <span>My Name is</span>
              <span>Andrys Frias.</span>
            </HeadingText>
            <SubHeadingText>I am a Digital Product Designer based in Dominican Republic</SubHeadingText>
            <Paragraph>And I could help you designing a lot of <span className = "stuff">stuff</span> for you. If you are a king/queen from a savage  forest interested in what I do just say <a href = "#" className = "hi">Hi Back!</a></Paragraph>
          </Col>
        </CustomRow>
      </Container>
    </Section>
  )
}

export default Hero
