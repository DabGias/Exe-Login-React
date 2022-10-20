import styled from "styled-components"

const StyleFooter = styled.footer `
    text-align: center;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        color: #C62368;
    }

    h3 {
        color: white;
    }
`

function Footer() {
    return(
        <>
            <StyleFooter>
                <h1>Autor</h1>
                <h3>Gabriel Furlaneti Dias</h3>
            </StyleFooter>
        </>
    )
}

export default Footer