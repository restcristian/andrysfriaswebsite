import styled from "styled-components"

export const Container = styled.div`
  max-width: 1550px;
  margin: 0 auto;
  padding:0 24px;
  width:100%;
`


export const Section = styled.section`
  position:relative;
  height:100vh;
  background-color: ${props => props.backgroundColor};
  padding-top:8rem;
  width:100%;
  display:flex;
  align-items:center;
`

export const Row = styled.div`
  display:flex;
  justify-content:${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  width:100%;
`