const flagsElement = document.querySelector("#flags")

const changeLanguage = async language => {
    const requestJson = await fetch(`./lang/${language}.json`)
    const texts = await requestJson.json()

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section
        const value = textToChange.dataset.value

        textToChange.innerHTML = texts[section][value]
    }
}

const textsToChange = document.querySelectorAll('[data-section]')

const toggleMenu = () => {
    document.querySelector("#menu").classList.toggle('right-0')
    document.querySelector("#menu").classList.toggle('-right-full')
}

const toggleDark = () => {
    document.querySelector("html").classList.toggle('dark')
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language)
})

/*
const toPEN = () => {
    location.href = "../../index.html"
}

const toUSA = () => {
    location.href = "./src/en/index.html"
}
*/