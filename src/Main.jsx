import { About } from "./About"
import { Form } from "./Form"
import { Home } from "./Home"
import { Reviews } from "./Reviews"
import { Services } from "./Services"
import { Tools } from "./Tools"

function Main() {
    return(
        <main>
            <Home />
            <About />
            <Services />
            <Tools />
            <Reviews />
            <Form />
        </main>
    )
}

export { Main }