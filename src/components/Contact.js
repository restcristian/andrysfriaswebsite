import React from 'react'
import { Container, Section, Row } from '../Layout/CommonStyled';
import Logo from '../components/Logo'
import styled from 'styled-components';


const LogoLink = styled.a`
    text-decoration:none;
    width:110px;
    display:inline-block;
`
const CustomRow = styled(Row) `
 
`;

function Contact() {
    return (
        <Section className="s-contact" backgroundColor="#333333">
            <Container>
                <CustomRow justifyContent= "center">
                    <LogoLink href="">
                        <Logo color = "#aedcec" />
                    </LogoLink>
                </CustomRow>
            </Container>
        </Section>
    )
}

export default Contact
