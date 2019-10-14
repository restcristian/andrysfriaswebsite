import React from 'react'
import { Container, Section, Row } from "../../Layout/CommonStyled"
import Logo from "../../components/Logo"
import styled from "styled-components";



const CustomRow = styled(Row) `

`
function ProjectList() {
    return (
        <Section>
            <Container>
                <CustomRow>
                        ProjectLists
                </CustomRow>
            </Container>
        </Section>
    )
}

export default ProjectList
