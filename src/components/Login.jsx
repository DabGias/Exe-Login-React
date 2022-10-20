import { useState } from "react"
import styled from "styled-components"

const StyleForm = styled.form `
    width: 40%;
    margin: 50px auto;
    border: 2px solid #C62368;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    h1 {
        margin: 10px;
        color: #C62368;
        text-align: center;
    }

    input {
        color: white;
        background-color: #001220;
        border: 2px solid #C62368;
        border-radius: 10px;
        padding: 10px;
        font-size: 15px;
        width: 80%;
        margin: 10px auto;
        text-align: center;
    }

    button {
        font-size: 15px;
        color: #C62368;
        padding: 5px;
        border: 2px solid #C62368;
        border-radius: 10px;
        background-color: #001220;  
        width: 15%;
        margin: 20px auto;
        transition: 150ms;
    }

    button:hover {
        cursor: pointer;
        color: #001220;
        background-color: #C62368;
        transition: 150ms;
    }
`

function Login() {
    const [perfil, setPerfil] = useState({
        login: "",
        senha: ""
    })

    function handleChange(e) {
        setPerfil({...perfil, [e.target.name]: e.target.value})
    }

    const logar = async (e) => {
        e.preventDefault()

        const requestOption = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(perfil)
        }

        const response = await fetch("http://localhost:8080/exe-login/rest/perfil", requestOption)

        const data = await response.json()

        if (data.login) {
            sessionStorage.setItem("perfil-logado", data.login)
        } 

        if (data) {
            window.location = "/home"
        } else {
            window.location = "/"
        }
    }

    return(
        <>
            <StyleForm onSubmit={logar}>
                <h1>Login</h1>

                <input type="text" name="login" value={perfil.login} onChange={handleChange} placeholder="Login"/>
                <input type="password" name="senha" value={perfil.senha} onChange={handleChange} placeholder="Senha"/>

                <button>Logar</button>
            </StyleForm>
        </>
    )
}

export default Login