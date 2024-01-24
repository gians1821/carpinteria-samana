const Home = () => {
    return(
        <section id="home"
            className="before:content-[''] before:bg-[rgb(0,0,0,0.5)] before:absolute before:inset-0 relative bg-hero-pattern h-[80vh] w-full bg-cover bg-center flex justify-center items-center"
        >
            <h1 
                className="relative shadow-lg shadow-black font-bold text-4xl w-min md:text-8xl bg-primary dark:bg-dark-primary py-4 md:py-8 px-4 md:px-10 rounded-lg">
                    CARPINTERÍA MAGIA MADERA
            </h1>
        </section>
    )
}

export { Home }
