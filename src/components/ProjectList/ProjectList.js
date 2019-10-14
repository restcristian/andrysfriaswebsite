import React from "react"
import { Container, Section, Row } from "../../Layout/CommonStyled"
import Logo from "../../components/Logo"
import styled from "styled-components"

const Col = styled.div`
  width: 50%;
`

const Slide = styled.div`
  background-color: ${props => props.backgroundColor};
  width: 100%;
  padding:0 24px;
`

const CustomContainer = styled(Container)`
    padding:0;
    align-items: stretch;
    display: flex;
    width:100%;
    max-width:none;
`
const CustomRow = styled(Row)`
    align-items:stretch;
    max-width:none;
`

function ProjectList() {
  const projects = [
    {
      id: "Project1",
      pic: require("../../images/project1.png"),
      backgroundColor: "#6653a6",
      info: {
        type: "Email Marketing",
        title: "Fusion",
        description:
          "Fusion is a channel from the Univision network focused to hispanic americans. In this project the goal was achieving an email to deliver the most latest and relevant content for the audience.",
        role: "Designer",
        client: "Univision",
        year: 2017,
        link: "https://testlink.com",
      },
    },
  ]
  return (
    <Section style={{ paddingTop: 0, alignItems: 'stretch' }}>
      <CustomContainer>
        <CustomRow >
          <Slide backgroundColor="#6653a6">asdasd</Slide>
        </CustomRow>
      </CustomContainer>
    </Section>
  )
}

export default ProjectList
