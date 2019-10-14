import React from "react"
import { Container, Section, Row } from "../../Layout/CommonStyled"
import Logo from "../../components/Logo"
import styled from "styled-components"

const Col = styled.div`
  width: 50%;
  padding: 0 35px;

  &.col-image {
    text-align: center;
    img {
      max-width: 450px;
      width: 100%;
    }
  }
`

const Slide = styled.div`
  background-color: ${props => props.backgroundColor};
  width: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
`

const Type = styled.h4`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 1.7rem;
  margin: 0;
`
const Title = styled.h3`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 3.4rem;
  margin: 0;
`

const Description = styled.p`
  color: #fff;
  margin: 2.2rem 0;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
`

const InfoTable = styled.table`
  color: #fff;
  font-family: "Source Code Pro", monospace;
  text-align: left;
  tr {
    border: none;
  }
  th {
    text-transform: uppercase;
    border: none;
    padding: 0;
  }
  td {
    padding: 0;
    border: none;
  }
`

const CustomContainer = styled(Container)`
  padding: 0;
  align-items: stretch;
  display: flex;
  width: 100%;
  max-width: none;
`

const CustomRow = styled(Row)`
  align-items: stretch;
  max-width: none;

  @media (max-width: 767px) {
    ${Slide} {
      display: block;
      padding: 40px 24px;

      ${Col} {
        width: 100%;
      }
    }
  }
`

const CustomSection = styled(Section)`
  padding-top: 0;
  align-items: stretch;

  @media (max-width: 767px) {
      height:auto;
  }
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

  const renderProjects = () =>
    projects.map(project => (
      <Slide key={project.id} backgroundColor={project.backgroundColor}>
        <Col className="col-image">
          <img src={project.pic} alt={project.title} />
        </Col>
        <Col className="col-info">
          <Type>{project.info.type}</Type>
          <Title>{project.info.title}</Title>
          <Description>{project.info.description}</Description>
          <InfoTable>
            <tr>
              <th>Role</th>
              <th>Client</th>
              <th>Year</th>
            </tr>
            <tr>
              <td>{project.info.role}</td>
              <td>{project.info.client}</td>
              <td>{project.info.year}</td>
            </tr>
          </InfoTable>
        </Col>
      </Slide>
    ))
  return (
    <CustomSection style={{}}>
      <CustomContainer>
        <CustomRow>{renderProjects()}</CustomRow>
      </CustomContainer>
    </CustomSection>
  )
}

export default ProjectList
