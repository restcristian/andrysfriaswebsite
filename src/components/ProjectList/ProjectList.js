import React, { useRef } from "react"
import { Container, Section, Row } from "../../Layout/CommonStyled"
import Logo from "../../components/Logo"
import { useScroll } from "../../hooks"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"

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
const SliderWrapper = styled.div`
  display: block;
  width: 100%;
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
  font-family: "Source Code Pro", monospace;
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
    font-weight: 500;
  }
  td {
    padding: 0;
    border: none;
  }

  @media (max-width: 391px) {
    font-size: 0.8rem;
  }
`

const ViewMoreLink = styled.a`
  text-decoration: none;
  display: inline-block;
  font-family: "Source Code Pro", monospace;
  color: #fff;
  font-size: 0.9rem;
  padding: 27px 97px;
  border: 1px solid #fff;
  border-radius: 100px 100px;

  @media (max-width: 391px) {
    font-size: 0.8rem;
    padding: 27px 62px;
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

  @media (max-width: 897px) {
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
  overflow: hidden;
  height: auto;
  background-color: #333333;

  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
  }

  @media (max-width: 897px) {
    height: auto;
  }
`

function ProjectList() {
  const scroll = useScroll()
  const sectionRef = useRef(null)

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
    {
      id: "Project2",
      pic: require("../../images/project2.png"),
      backgroundColor: "#f0494c",
      info: {
        type: "Website",
        title: "Haidy Cruz",
        description:
          "Haidy Cruz is a personal trainer and nutritional guide from Dominican Republic, known as the Queen of fitness with several awards in competitions.",
        role: "Designer",
        client: "Haidy Cruz",
        year: 2019,
        link: "https://testlink.com",
      },
    },
    {
      id: "Project3",
      pic: require("../../images/project3.png"),
      backgroundColor: "#333e7a",
      info: {
        type: "Branding",
        title: "SICA",
        description:
          "The Central American Integration System (SICA) is an international organization that has been leading the economic and political side of Central American states since 1993.",
        role: "Designer",
        client: "Personal",
        year: 2019,
        link: "https://testlink.com",
      },
    },
  ]

  const renderProjects = () =>
    projects.map(project => (
      <Tween key={project.id} from={{ x: "-100%" }} to={{ x: "0%" }}>
        <Slide backgroundColor={project.backgroundColor} className="panel">
          <Col className="col-image">
            <img src={project.pic} alt={project.title} />
          </Col>
          <Col className="col-info">
            <Type>{project.info.type}</Type>
            <Title>{project.info.title}</Title>
            <Description>{project.info.description}</Description>
            <InfoTable>
              <tbody>
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
              </tbody>
            </InfoTable>
            <ViewMoreLink href={project.info.link}>View more</ViewMoreLink>
          </Col>
        </Slide>
      </Tween>
    ))

  return (
    <CustomSection ref={sectionRef}>
      <Controller>
        <Scene triggerHook="onLeave" duration="300%" pin>
          {/* <CustomContainer>
            <CustomRow>
              <SliderWrapper> */}
                <Timeline wrapper={<div id="pinContainer" />}>
                  {renderProjects()}
                </Timeline>
              {/* </SliderWrapper>
            </CustomRow>
          </CustomContainer> */}
        </Scene>
      </Controller>
    </CustomSection>
  )
}

export default ProjectList
