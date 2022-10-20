import { useEffect } from "react"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

const perfil = sessionStorage.getItem("perfil-logado")

const StyleMain = styled.main `
    width: 70%;
    margin: 20px auto;

    h1 {
        color: #C62368;
        font-size: 50px;
    }

    section {
        margin: 50px;
    }

    section p {
        text-indent: 30px;
        color: white;
        text-align: justify;
        font-size: 20px;
    }
`

function Home() {
    useEffect(() => {
        if (perfil === null) {
            window.location = "/"
        }
    }, [])

    return(
        <>
            <Header/>
                <StyleMain>
                    <h1>Bem-vindo(a), {perfil}!</h1>

                    <section>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque sapiente aut tempora fugit obcaecati, accusantium vel? Iusto quasi odio dignissimos itaque nemo laborum, laboriosam, pariatur vero ipsum quos deleniti.</p>
                        <p>Nemo corporis sequi iure quis minus nisi pariatur accusantium ducimus non rerum hic neque vero dolor, at eaque distinctio temporibus repellat? Atque ullam sequi eveniet perferendis dolorum inventore harum eius?</p>
                        <p>Dolorum, odio iste facere fugit ipsam aperiam. Commodi, vero porro? Iusto ad, voluptatem animi nulla praesentium impedit placeat, perspiciatis ex voluptate officiis dolore assumenda harum eos repudiandae suscipit eum unde.</p>
                        <p>Nesciunt, in consequuntur. Fuga cum obcaecati quasi mollitia officia voluptatem architecto pariatur earum doloribus hic harum consectetur ex blanditiis dolor unde ab incidunt nostrum accusantium, odio esse debitis assumenda dolores.</p>
                        <p>Natus quam laborum consequatur cumque corporis repellendus aliquid, eligendi aspernatur, inventore aut obcaecati odio assumenda a expedita dolorum corrupti ratione perferendis magnam, delectus sequi quia nesciunt? Porro veniam aut molestiae?</p>
                        <p>At, voluptate, ullam nostrum totam architecto labore porro repudiandae quae iusto beatae molestiae! Iure placeat doloremque aliquid ex magni nulla perferendis, similique velit, a dignissimos voluptatibus, temporibus harum mollitia ut.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque sapiente aut tempora fugit obcaecati, accusantium vel? Iusto quasi odio dignissimos itaque nemo laborum, laboriosam, pariatur vero ipsum quos deleniti.</p>
                        <p>Nemo corporis sequi iure quis minus nisi pariatur accusantium ducimus non rerum hic neque vero dolor, at eaque distinctio temporibus repellat? Atque ullam sequi eveniet perferendis dolorum inventore harum eius?</p>
                        <p>Dolorum, odio iste facere fugit ipsam aperiam. Commodi, vero porro? Iusto ad, voluptatem animi nulla praesentium impedit placeat, perspiciatis ex voluptate officiis dolore assumenda harum eos repudiandae suscipit eum unde.</p>
                        <p>Nesciunt, in consequuntur. Fuga cum obcaecati quasi mollitia officia voluptatem architecto pariatur earum doloribus hic harum consectetur ex blanditiis dolor unde ab incidunt nostrum accusantium, odio esse debitis assumenda dolores.</p>
                        <p>Natus quam laborum consequatur cumque corporis repellendus aliquid, eligendi aspernatur, inventore aut obcaecati odio assumenda a expedita dolorum corrupti ratione perferendis magnam, delectus sequi quia nesciunt? Porro veniam aut molestiae?</p>
                        <p>At, voluptate, ullam nostrum totam architecto labore porro repudiandae quae iusto beatae molestiae! Iure placeat doloremque aliquid ex magni nulla perferendis, similique velit, a dignissimos voluptatibus, temporibus harum mollitia ut.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque sapiente aut tempora fugit obcaecati, accusantium vel? Iusto quasi odio dignissimos itaque nemo laborum, laboriosam, pariatur vero ipsum quos deleniti.</p>
                        <p>Nemo corporis sequi iure quis minus nisi pariatur accusantium ducimus non rerum hic neque vero dolor, at eaque distinctio temporibus repellat? Atque ullam sequi eveniet perferendis dolorum inventore harum eius?</p>
                        <p>Dolorum, odio iste facere fugit ipsam aperiam. Commodi, vero porro? Iusto ad, voluptatem animi nulla praesentium impedit placeat, perspiciatis ex voluptate officiis dolore assumenda harum eos repudiandae suscipit eum unde.</p>
                        <p>Nesciunt, in consequuntur. Fuga cum obcaecati quasi mollitia officia voluptatem architecto pariatur earum doloribus hic harum consectetur ex blanditiis dolor unde ab incidunt nostrum accusantium, odio esse debitis assumenda dolores.</p>
                        <p>Natus quam laborum consequatur cumque corporis repellendus aliquid, eligendi aspernatur, inventore aut obcaecati odio assumenda a expedita dolorum corrupti ratione perferendis magnam, delectus sequi quia nesciunt? Porro veniam aut molestiae?</p>
                        <p>At, voluptate, ullam nostrum totam architecto labore porro repudiandae quae iusto beatae molestiae! Iure placeat doloremque aliquid ex magni nulla perferendis, similique velit, a dignissimos voluptatibus, temporibus harum mollitia ut.</p>
                    </section>
                </StyleMain>
            <Footer/>
        </>
    )
}

export default Home