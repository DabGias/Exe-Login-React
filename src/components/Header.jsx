import styled from "styled-components"

const StyleHeader = styled.header `
    padding: 30px;
    display: flex;
    justify-content: space-between;

    h1 {
        color: #C62368;
    }

    button {
        font-size: 15px;
        color: #C62368;
        padding: 5px;
        border: 2px solid #C62368;
        border-radius: 10px;
        background-color: #001220;
        width: 5%;
        transition: 150ms;
    }

    button:hover {
        cursor: pointer;
        color: #001220;
        background-color: #C62368;
        transition: 150ms;
    }
`

function Header() {
    function logout() {
        sessionStorage.removeItem("perfil-logado")
        window.location = "/"
    }

    return(
        <>
            <StyleHeader>
                <h1>Exercício de Login</h1>
                <button onClick={logout}>Sair</button>
            </StyleHeader>
        </>
    )
}

export default Header