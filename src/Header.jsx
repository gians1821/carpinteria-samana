import { NavComponent } from "./NavComponent"
import { Logo } from "./Logo"
import { useEffect, useState } from "react"

function Header() {

    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    const [darkMode, setDarkMode] = useState(prefersDarkMode)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
    }, [darkMode])


    document.addEventListener('DOMContentLoaded', () => {
        const $toggleDark = document.querySelector('#toggleDark')
        $toggleDark.addEventListener('click', () => {
            setDarkMode(!darkMode)
            console.log("AA");
        })
    })
    
    return(
        <header className="fixed bg-gradient-to-t from-primary to-secondary w-full z-10 shadow-lg dark:from-dark-primary dark:to-dark-secondary">
            
            <div className="flex justify-between items-center h-20 md:w-[80%] md:m-auto">
  
                <Logo src='https://i.imgur.com/ufSjp2D.png'/>
                <Logo src='https://i.imgur.com/kPWgjSU.png'/>
            
                <ul id="menu"
                    className="transition-all duration-500 fixed text-center -right-full w-full h-max gap-2 top-20 bg-secondary dark:bg-dark-secondary md:flex md:relative md:top-auto md:h-auto md:w-auto md:bg-transparent md:transition-none md:right-0">
                    <NavComponent text='INICIO' href='#home' />
                    <NavComponent text='¿QUIÉNES SOMOS?' href='#about'/>
                    <NavComponent text='REALIZA TU CONSULTA' href='#form' />
                    <NavComponent text='SERVICIOS' href='#services' />
                    <NavComponent text='CONTÁCTANOS' href='#contact' />
                </ul>

                <ul className="flex gap-2">
                    <div>
                    <button className="w-16 h-12 flex items-center bg-transparent justify-center hover:bg-hover dark:hover:bg-dark-hover rounded">
                        <img className="object-contain w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1200px-Flag_of_Peru.svg.png" alt="peru-flag" />
                    </button>
                    </div>
                    <div>
                        <button id="toggleDark" className="w-12 h-12 flex items-center bg-transparent justify-center hover:bg-hover dark:hover:bg-dark-hover rounded"><i className="fa-solid fa-circle-half-stroke text-2xl"></i></button>
                    </div>
                </ul>

                <div className="md:hidden">
                    <i className="fa-solid fa-bars mr-6 cursor-pointer text-[2rem]"></i>
                </div>
        
            </div>

        </header>
    )
}

export { Header }